import { IsString, IsNotEmpty, MaxLength, IsEmail, MinLength } from 'class-validator';
import { Match } from 'src/decorator/match.decorator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(30)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  @MaxLength(20)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  @MaxLength(20)
  @Match('password', { message: 'パスワードが一致しません。'})
  confirm_password: string;
}