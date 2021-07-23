import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserModel } from './user.model';
import { SequelizeModule } from '@nestjs/sequelize';
// import { User } from './user.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([User])], //使用typeorm连接实体部分
  imports: [SequelizeModule.forFeature([UserModel])], //使用sequelize orm连接实体部分
  providers: [UsersService], 
  controllers: [UsersController],
})
export class UsersModule {}
