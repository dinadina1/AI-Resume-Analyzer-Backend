import { Response, NextFunction } from 'express';
import { ResumeService } from './resume.service';
import { AuthRequest } from '../../middleware/auth.middleware';
import { sendSuccess, sendCreated } from '../../utils/response';
import { AppError } from '../../middleware/error.middleware';

export class ResumeController {
  private readonly service: ResumeService;

  constructor() {
    this.service = new ResumeService();
  }

  async upload(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.file) throw new AppError('No file uploaded', 400);
      const resume = await this.service.uploadResume(req.user!.userId, req.file);
      sendCreated(res, resume, 'Resume uploaded successfully. Analysis is being processed.');
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const result = await this.service.getUserResumes(req.user!.userId, page, limit);
      sendSuccess(res, result, 'Resumes fetched successfully');
    } catch (error) {
      next(error);
    }
  }

  async getOne(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const resume = await this.service.getResume(req.params.id, req.user!.userId);
      sendSuccess(res, resume, 'Resume fetched successfully');
    } catch (error) {
      next(error);
    }
  }

  async getStatus(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const status = await this.service.getResumeStatus(req.params.id, req.user!.userId);
      sendSuccess(res, status, 'Resume status fetched');
    } catch (error) {
      next(error);
    }
  }

  async deleteOne(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.service.deleteResume(req.params.id, req.user!.userId);
      sendSuccess(res, null, 'Resume deleted successfully');
    } catch (error) {
      next(error);
    }
  }
}
