import { Response, NextFunction } from 'express';
import { SuggestionService } from './suggestion.service';
import { AuthRequest } from '../../middleware/auth.middleware';
import { sendSuccess } from '../../utils/response';

export class SuggestionController {
  private readonly service: SuggestionService;

  constructor() {
    this.service = new SuggestionService();
  }

  async getSuggestions(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const suggestions = await this.service.getSuggestionsByResume(
        req.params.resumeId,
        req.user!.userId
      );
      sendSuccess(res, suggestions, 'Suggestions fetched successfully');
    } catch (error) {
      next(error);
    }
  }
}
