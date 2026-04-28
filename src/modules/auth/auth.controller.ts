import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
import { signupSchema, loginSchema, refreshTokenSchema, validate } from './auth.validation';
import { sendSuccess, sendCreated } from '../../utils/response';
import { AuthRequest } from '../../middleware/auth.middleware';

const authService = new AuthService();

export class AuthController {
  async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dto = validate(signupSchema, req.body);
      const result = await authService.signup(dto);
      sendCreated(res, result, 'Account created successfully');
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dto = validate(loginSchema, req.body);
      const result = await authService.login(dto);
      sendSuccess(res, result, 'Login successful');
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dto = validate(refreshTokenSchema, req.body);
      const tokens = await authService.refreshTokens(dto.refreshToken);
      sendSuccess(res, tokens, 'Tokens refreshed successfully');
    } catch (error) {
      next(error);
    }
  }

  async logout(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.userId;
      const refreshToken = req.body.refreshToken as string | undefined;
      await authService.logout(userId, refreshToken);
      sendSuccess(res, null, 'Logged out successfully');
    } catch (error) {
      next(error);
    }
  }

  async getMe(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await authService.getMe(req.user!.userId);
      sendSuccess(res, user, 'User fetched successfully');
    } catch (error) {
      next(error);
    }
  }
}
