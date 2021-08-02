import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticleController } from './article.controller';
import { ArticleModel } from './article.model';
import { ArticleService } from './article.service';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
  imports: [SequelizeModule.forFeature([ArticleModel])],
})
export class ArticleModule {}
