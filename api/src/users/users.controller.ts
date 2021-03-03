import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignUpDTO } from './user.dto';
import { User } from 'src/entity/User';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  
  @Post('signup')
  public signUp(@Body() req: SignUpDTO): Promise<User> {
    return this.usersService.signUp(req);
  }

  @Get('findAll')
  public findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
