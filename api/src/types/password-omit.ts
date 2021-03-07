import { User } from "src/entity/User";

export type PasswordOmitUser = Omit<User, 'password'>;