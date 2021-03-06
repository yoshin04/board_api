import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entity/User';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(email: string): Promise<User> {
    return await this.userRepository.findOneOrFail({ email });
  }

  async findById(tokenId: number): Promise<User> {
    return await this.userRepository.findOne(tokenId);
  }

  async findAll(): Promise<User[] | undefined> {
    return await this.userRepository.find();
  }

  async signUp(newUser: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    const user = new User();
    const { name, email, password } = newUser;
    user.name = name;
    user.password = bcrypt.hashSync(password, parseInt(process.env.SALT_ROUND));
    user.email = email;
    return await this.userRepository.save(user);
  }
}
