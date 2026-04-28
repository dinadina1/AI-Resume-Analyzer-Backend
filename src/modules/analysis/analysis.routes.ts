import { Router } from 'express';
import { AnalysisController } from './analysis.controller';
import { authenticate } from '../../middleware/auth.middleware';

export const analysisRouter = Router();
const controller = new AnalysisController();

analysisRouter.use(authenticate);

analysisRouter.get('/resume/:resumeId', (req, res, next) =>
  controller.getReportsByResume(req, res, next)
);
analysisRouter.get('/:id', (req, res, next) => controller.getReportById(req, res, next));
