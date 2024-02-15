import { Request, Response, NextFunction } from 'express';
import { decodeJWT } from '../utils/jwtUtils';

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]; // Assuming the token is sent as a Bearer token
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = decodeJWT(token);

    // This assigns the decoded user object to the request object
    // so that it can be accessed in other route handlers
    req.user = {
      sub: decoded.sub,
      name: decoded.name,
      roles: decoded.roles,
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
