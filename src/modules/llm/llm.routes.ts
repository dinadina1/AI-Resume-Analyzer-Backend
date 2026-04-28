import { Router } from 'express';
import { LlmController } from './llm.controller';
import { authenticate } from '../../middleware/auth.middleware';

export const llmRouter = Router();
const controller = new LlmController();

llmRouter.use(authenticate);

llmRouter.get('/config', (req, res, next) => controller.getConfig(req, res, next));
llmRouter.post('/config', (req, res, next) => controller.saveConfig(req, res, next));
llmRouter.patch('/config/toggle', (req, res, next) => controller.toggleConfig(req, res, next));
llmRouter.get('/usage', (req, res, next) => controller.getUsage(req, res, next));
