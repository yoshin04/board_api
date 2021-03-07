import bcrypt = require('bcrypt');
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entity/User';
import { PasswordOmitUser } from 'src/types/password-omit';
import { JwtPayload } from 'src/dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  //ユーザーを認証する
  async validateUser(
    email: User['email'],
    pass: User['password'],
  ): Promise<PasswordOmitUser | null> {
    const user = await this.usersService.findOne(email); // DBからUserを取得

    // DBに保存されているpasswordはハッシュ化されている事を想定しているので、
    // bcryptなどを使ってパスワードを判定する
    if (!user || !bcrypt.compareSync(pass, user.password)) {
      //password情報を外部に出さないようにする
      return null;
    }
    const { password, ...result } = user;
    return result;
  }

  async validateToken(id: number) {
    const user = await this.usersService.findById(id);
    if (!user) {
      return null;
    }
    return user;
  }

  //jwt tokenを返す
  async login(user: PasswordOmitUser) {
    // jwtにつけるPayload情報
    const payload: JwtPayload = { id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
