import jwt from 'jsonwebtoken';
import { UserJWTPayload } from '../types/UserJWTPayload';

export const decodeJWT = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UserJWTPayload;
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
