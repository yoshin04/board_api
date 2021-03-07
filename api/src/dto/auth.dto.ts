import { User } from "src/entity/User";
import { IsInt, IsNotEmpty } from "class-validator";

export class JwtPayload  {
  @IsInt()
  @IsNotEmpty()
  id: number;
}