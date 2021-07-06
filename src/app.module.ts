import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { ArticleController } from './article/article.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, NewsController, ArticleController],
  providers: [AppService, NewsService],
})
export class AppModule {}
