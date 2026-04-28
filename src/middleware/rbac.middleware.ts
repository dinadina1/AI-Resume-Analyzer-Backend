import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth.middleware';
import { sendForbidden } from '../utils/response';

export type Role = 'USER' | 'ADMIN';

export function authorize(...allowedRoles: Role[]) {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    const userRole = req.user?.role as Role;

    if (!userRole || !allowedRoles.includes(userRole)) {
      sendForbidden(res, 'You do not have permission to access this resource');
      return;
    }

    next();
  };
}
