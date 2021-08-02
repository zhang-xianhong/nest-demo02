import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TypeController } from './type.controller';
import { TypeModel } from './type.model';
import { TypeService } from './type.service';

@Module({
  controllers: [TypeController],
  providers: [TypeService],
  imports: [SequelizeModule.forFeature([TypeModel])],
})
export class TypeModule {}
