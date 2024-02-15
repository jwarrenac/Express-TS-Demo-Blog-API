// types/express.d.ts or wherever your type definitions are
import { UserJWTPayload } from '../UserJWTPayload';

declare global {
  namespace Express {
    interface Request {
      user?: UserJWTPayload;
    }
  }
}
