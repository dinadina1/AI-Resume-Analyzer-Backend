import { Response, NextFunction } from 'express';
import { JobDescriptionService } from './jobDescription.service';
import { AuthRequest } from '../../middleware/auth.middleware';
import { sendSuccess, sendCreated } from '../../utils/response';

export class JobDescriptionController {
  private readonly service: JobDescriptionService;

  constructor() {
    this.service = new JobDescriptionService();
  }

  async matchJd(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { resumeId, title, content } = req.body as {
        resumeId: string;
        title: string;
        content: string;
      };
      const result = await this.service.matchResumeWithJd({
        resumeId,
        jdTitle: title,
        jdText: content,
        userId: req.user!.userId,
      });
      sendCreated(res, result, 'JD match completed successfully');
    } catch (error) {
      next(error);
    }
  }

  async getMyJds(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const jds = await this.service.getUserJds(req.user!.userId);
      sendSuccess(res, jds, 'Job descriptions fetched');
    } catch (error) {
      next(error);
    }
  }

  async getMyMatches(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const matches = await this.service.getUserMatches(req.user!.userId);
      sendSuccess(res, matches, 'JD matches fetched');
    } catch (error) {
      next(error);
    }
  }
}
