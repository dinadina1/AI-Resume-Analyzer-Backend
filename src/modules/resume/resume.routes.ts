import { Router } from 'express';
import { ResumeController } from './resume.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { uploadSingleResume } from '../../middleware/upload.middleware';
import { uploadRateLimiter } from '../../middleware/rateLimit.middleware';

export const resumeRouter = Router();
const controller = new ResumeController();

resumeRouter.use(authenticate);

resumeRouter.post(
  '/upload',
  uploadRateLimiter,
  uploadSingleResume,
  (req, res, next) => controller.upload(req, res, next)
);
resumeRouter.get('/', (req, res, next) => controller.getAll(req, res, next));
resumeRouter.get('/:id', (req, res, next) => controller.getOne(req, res, next));
resumeRouter.get('/:id/status', (req, res, next) => controller.getStatus(req, res, next));
resumeRouter.get('/:id/download', (req, res, next) => controller.download(req, res, next));
resumeRouter.delete('/:id', (req, res, next) => controller.deleteOne(req, res, next));
