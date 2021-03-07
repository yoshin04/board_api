import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entity/User';
import { SignUpDto } from 'src/dto/signup.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  public async signUp(@Body() signUpDto: SignUpDto): Promise<User> {
    return await this.usersService.signUp(signUpDto);
  }

  @Get('findAll')
  public async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}
