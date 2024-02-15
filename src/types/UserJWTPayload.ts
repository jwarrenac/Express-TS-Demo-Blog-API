import { UserRole } from "./UserRole";

export interface UserJWTPayload {
  sub: string;
  name: string;
  roles: UserRole[];
}