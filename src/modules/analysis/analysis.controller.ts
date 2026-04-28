import { Response, NextFunction } from 'express';
import { AnalysisService } from './analysis.service';
import { AuthRequest } from '../../middleware/auth.middleware';
import { sendSuccess } from '../../utils/response';

export class AnalysisController {
  private readonly service: AnalysisService;

  constructor() {
    this.service = new AnalysisService();
  }

  async getReportsByResume(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const reports = await this.service.getReportByResumeId(
        req.params.resumeId as string,
        req.user!.userId
      );
      sendSuccess(res, reports, 'Analysis reports fetched successfully');
    } catch (error) {
      next(error);
    }
  }

  async getReportById(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const report = await this.service.getReportById(req.params.id as string, req.user!.userId);
      sendSuccess(res, report, 'Analysis report fetched successfully');
    } catch (error) {
      next(error);
    }
  }
}
