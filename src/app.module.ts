import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './testuser/user.controller';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { ArticleController } from './article/article.controller';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
// import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { logger } from './common/middleware/logger.middleware';
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/user.module';

@Module({
  imports: [CatsModule, UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',
    database: 'zxh_databases',
    // entities: [User],
    synchronize: true,
    autoLoadEntities: true
  })],
  controllers: [AppController, UserController, NewsController, ArticleController],
  providers: [AppService, NewsService],
})

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer){
//     consumer.apply(LoggerMiddleware).forRoutes({
//       path: 'cats',
//       method: RequestMethod.GET
//     });
//   }
// }

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer){
//     consumer.apply(logger).forRoutes(CatsController);
//   }
// }

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
