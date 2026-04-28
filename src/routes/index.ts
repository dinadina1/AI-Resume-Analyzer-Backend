import { Router } from 'express';
import { authRouter } from '../modules/auth/auth.routes';
import { userRouter } from '../modules/user/user.routes';
import { resumeRouter } from '../modules/resume/resume.routes';
import { analysisRouter } from '../modules/analysis/analysis.routes';
import { jobDescriptionRouter } from '../modules/job-description/jobDescription.routes';
import { suggestionRouter } from '../modules/suggestion/suggestion.routes';
import { llmRouter } from '../modules/llm/llm.routes';

export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/resumes', resumeRouter);
apiRouter.use('/analysis', analysisRouter);
apiRouter.use('/job-descriptions', jobDescriptionRouter);
apiRouter.use('/suggestions', suggestionRouter);
apiRouter.use('/llm', llmRouter);
