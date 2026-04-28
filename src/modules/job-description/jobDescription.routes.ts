import { Router } from 'express';
import { JobDescriptionController } from './jobDescription.controller';
import { authenticate } from '../../middleware/auth.middleware';

export const jobDescriptionRouter = Router();
const controller = new JobDescriptionController();

jobDescriptionRouter.use(authenticate);

jobDescriptionRouter.post('/match', (req, res, next) => controller.matchJd(req, res, next));
jobDescriptionRouter.get('/matches', (req, res, next) => controller.getMyMatches(req, res, next));
jobDescriptionRouter.get('/matches/:matchId', (req, res, next) => controller.getMatchDetail(req, res, next));
jobDescriptionRouter.get('/', (req, res, next) => controller.getMyJds(req, res, next));
