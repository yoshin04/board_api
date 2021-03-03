import { User } from "src/entity/User";

export interface JwtPayload  {
  id: User['id'];
}