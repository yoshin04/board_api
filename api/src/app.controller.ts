import {
  Controller,
  Get,
  UseGuards,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entity/User';

type PasswordOmitUser = Omit<User, 'password'>;

@Controller('api')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local')) //passport-local戦略を付与
  @Post('login')
  async login(@Request() req: { user: PasswordOmitUser }) {
    //JwtStrategy.validate()で返した値がreq.userに入ってくる
    const user = req.user;
    //JwtTokenを返す
    return this.authService.login(user);
  }
  /**
   * @description JWT認証を用いたサンプルAPI
   */
  @UseGuards(AuthGuard('jwt')) // passport-jwt戦略を付与
  @Get('me')
  getProfile(@Request() req: { user: PasswordOmitUser }) {
    // JwtStrategy.validate()で認証して返した値がreq.userに入ってくる
    const user = req.user;
    //認証に成功したユーザーの情報を返す
    return req.user;
  }
}
