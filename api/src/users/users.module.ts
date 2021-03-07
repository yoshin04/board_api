import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/User';
import { UsersController } from './users.controller';

@Module({
  //UserエンティティをUsersServiceで使えるようにする
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],

  //UsersServiceを他のクラスでも使えるようにする
  exports: [UsersService],
})
export class UsersModule {}
