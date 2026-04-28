import { Router } from 'express';
import { UserController } from './user.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { authorize } from '../../middleware/rbac.middleware';

export const userRouter = Router();
const controller = new UserController();

userRouter.get('/profile', authenticate, (req, res, next) =>
  controller.getProfile(req, res, next)
);
userRouter.patch('/profile', authenticate, (req, res, next) =>
  controller.updateProfile(req, res, next)
);
userRouter.get('/', authenticate, authorize('ADMIN'), (req, res, next) =>
  controller.getAllUsers(req, res, next)
);
