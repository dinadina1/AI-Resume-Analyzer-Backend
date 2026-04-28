import { Response, NextFunction } from 'express';
import { UserService } from './user.service';
import { sendSuccess } from '../../utils/response';
import { AuthRequest } from '../../middleware/auth.middleware';

export class UserController {
  private readonly service: UserService;

  constructor() {
    this.service = new UserService();
  }

  async getProfile(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await this.service.getProfile(req.user!.userId);
      sendSuccess(res, user, 'Profile fetched successfully');
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name } = req.body as { name?: string };
      const user = await this.service.updateProfile(req.user!.userId, { name });
      sendSuccess(res, user, 'Profile updated successfully');
    } catch (error) {
      next(error);
    }
  }

  async getAllUsers(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const result = await this.service.getAllUsers(page, limit);
      sendSuccess(res, result, 'Users fetched successfully');
    } catch (error) {
      next(error);
    }
  }
}
