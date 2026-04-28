import { Response, NextFunction } from 'express';
import { ResumeService } from './resume.service';
import { AuthRequest } from '../../middleware/auth.middleware';
import { sendSuccess, sendCreated } from '../../utils/response';
import { AppError } from '../../middleware/error.middleware';
import path from 'path';
import fs from 'fs';

export class ResumeController {
  private readonly service: ResumeService;

  constructor() {
    this.service = new ResumeService();
  }

  async upload(req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.file) throw new AppError('No file uploaded', 400);
      const resume = await this.service.uploadResume(req.user!.userId, req.file as any);
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
      const { id } = req.params;
      const resume = await this.service.getResume(id as string, req.user!.userId);
      sendSuccess(res, resume, 'Resume fetched successfully');
    } catch (error) {
      next(error);
    }
  }

  async getStatus(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const status = await this.service.getResumeStatus(req.params.id as string, req.user!.userId);
      sendSuccess(res, status, 'Resume status fetched');
    } catch (error) {
      next(error);
    }
  }

  async deleteOne(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.service.deleteResume(req.params.id as string, req.user!.userId);
      sendSuccess(res, null, 'Resume deleted successfully');
    } catch (error) {
      next(error);
    }
  }

  async download(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const resume = await this.service.getResume(req.params.id as string, req.user!.userId);
      const filePath = path.resolve(resume.filePath);

      if (!fs.existsSync(filePath)) {
        throw new AppError('Original resume file not found on server', 404);
      }

      res.setHeader('Content-Disposition', `attachment; filename="${resume.originalName}"`);
      res.setHeader('Content-Type', 'application/pdf');
      fs.createReadStream(filePath).pipe(res);
    } catch (error) {
      next(error);
    }
  }
}
