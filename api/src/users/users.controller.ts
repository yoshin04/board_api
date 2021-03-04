import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entity/User';
import { SignUpDto } from 'src/dto/signup.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  
  @Post('signup')
  public signUp(@Body() req: SignUpDto): Promise<User> {
    return this.usersService.signUp(req);
  }

  @Get('findAll')
  public findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
