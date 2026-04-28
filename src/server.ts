import app from './app';
import { env } from './config/env';
import { logger } from './utils/logger';
import { connectDatabase, disconnectDatabase } from './config/db';
import { getRedisClient, disconnectRedis } from './config/redis';
import { resumeAnalysisWorker } from './queue/worker';

let server: any;

async function bootstrap(): Promise<void> {
  try {
    // Prevent duplicate listeners (important for hot reload)
    process.removeAllListeners('SIGINT');
    process.removeAllListeners('SIGTERM');

    // Connect to DB
    await connectDatabase();

    // Connect Redis
    await getRedisClient();

    // Worker events
    resumeAnalysisWorker.on('completed', (job) => {
      logger.info(`Job ${job.id} completed successfully`);
    });

    resumeAnalysisWorker.on('failed', (job, err) => {
      logger.error(`Job ${job?.id} failed`, { error: err.message });
    });

    // Start server
    server = app.listen(env.port, () => {
      logger.info(`🚀 Server running on port ${env.port} [${env.nodeEnv}]`);
      if (env.isDev) {
        logger.info(`📖 Swagger: http://localhost:${env.port}/api-docs`);
      }
    });

    // Handle port already in use
    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        logger.error(`❌ Port ${env.port} already in use`);
        process.exit(1);
      }
    });

    // Graceful shutdown
    const shutdown = async (signal: string) => {
      logger.info(`🛑 Received ${signal}. Shutting down...`);

      try {
        if (server) {
          server.close(async () => {
            await resumeAnalysisWorker.close();
            await disconnectDatabase();
            await disconnectRedis();

            logger.info('✅ Shutdown complete');
            process.exit(0);
          });
        }
      } catch (err) {
        logger.error('Shutdown error', { err });
        process.exit(1);
      }

      // Force shutdown after timeout
      setTimeout(() => {
        logger.error('⚠️ Forced shutdown after timeout');
        process.exit(1);
      }, 10000);
    };

    // Signals
    process.once('SIGINT', () => shutdown('SIGINT'));
    process.once('SIGTERM', () => shutdown('SIGTERM'));

    // Nodemon restart fix
    process.once('SIGUSR2', async () => {
      await shutdown('SIGUSR2');
      process.kill(process.pid, 'SIGUSR2');
    });

    // Unhandled errors
    process.on('unhandledRejection', (reason) => {
      logger.error('Unhandled Rejection', { reason });
      shutdown('unhandledRejection');
    });

    process.on('uncaughtException', (err) => {
      logger.error('Uncaught Exception', { err });
      shutdown('uncaughtException');
    });

  } catch (err) {
    logger.error('❌ Failed to start server', { err });
    process.exit(1);
  }
}

bootstrap();