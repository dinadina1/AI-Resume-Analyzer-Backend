import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import { env } from './config/env';
import { logger } from './utils/logger';
import { globalRateLimiter } from './middleware/rateLimit.middleware';
import { errorHandler, NotFoundError } from './middleware/error.middleware';
import { apiRouter } from './routes';

const app: Application = express();

// ─── Security Headers ────────────────────────────────────────────────────────
app.use(helmet());

// ─── CORS ────────────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: env.frontend.url,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type', 'X-Refresh-Token'],
  })
);

// ─── Compression ─────────────────────────────────────────────────────────────
app.use(compression());

// ─── Body Parsing ────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ─── HTTP Logger ─────────────────────────────────────────────────────────────
if (env.isDev) {
  app.use(morgan('dev'));
} else {
  app.use(
    morgan('combined', {
      // stream: { write: (message) => logger.info(message.trim()) },
    })
  );
}

// ─── Rate Limiting ───────────────────────────────────────────────────────────
app.use(globalRateLimiter);

// ─── Static Files (uploads) ──────────────────────────────────────────────────
app.use('/uploads', express.static('uploads'));

// ─── Swagger Docs ────────────────────────────────────────────────────────────
if (env.isDev) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const swaggerDocument = require('../swagger.json');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    logger.info('📖 Swagger UI available at /api-docs');
  } catch {
    logger.warn('swagger.json not found — Swagger UI disabled');
  }
}

// ─── Health Check ────────────────────────────────────────────────────────────
app.get('/health', (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'AI Resume Analyzer API is healthy',
    timestamp: new Date().toISOString(),
    environment: env.nodeEnv,
  });
});

// ─── API Routes ──────────────────────────────────────────────────────────────
app.use('/api/v1', apiRouter);

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use((_req: Request, _res: Response, next) => {
  next(new NotFoundError(`Route ${_req.method} ${_req.originalUrl} not found`));
});

// ─── Global Error Handler ────────────────────────────────────────────────────
app.use(errorHandler);

export default app;
