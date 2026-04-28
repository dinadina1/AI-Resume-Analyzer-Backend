import { Router } from 'express';
import { AuthController } from './auth.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { authRateLimiter } from '../../middleware/rateLimit.middleware';

export const authRouter = Router();
const controller = new AuthController();

// Public routes
authRouter.post('/signup', authRateLimiter, (req, res, next) => controller.signup(req, res, next));
authRouter.post('/login', authRateLimiter, (req, res, next) => controller.login(req, res, next));
authRouter.post('/refresh', (req, res, next) => controller.refreshToken(req, res, next));

// Protected routes
authRouter.post('/logout', authenticate, (req, res, next) => controller.logout(req, res, next));
authRouter.get('/me', authenticate, (req, res, next) => controller.getMe(req, res, next));
