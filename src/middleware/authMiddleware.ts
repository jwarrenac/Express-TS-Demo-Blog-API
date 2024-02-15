import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../types/UserRole';

export const authorize = (...allowedRoles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const hasRole = allowedRoles.some(role => req.user?.roles.includes(role));
    if (!hasRole) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
};