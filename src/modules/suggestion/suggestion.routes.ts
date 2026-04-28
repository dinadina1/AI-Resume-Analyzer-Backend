import { Router } from 'express';
import { SuggestionController } from './suggestion.controller';
import { authenticate } from '../../middleware/auth.middleware';

export const suggestionRouter = Router();
const controller = new SuggestionController();

suggestionRouter.use(authenticate);
suggestionRouter.get('/resume/:resumeId', (req, res, next) =>
  controller.getSuggestions(req, res, next)
);
