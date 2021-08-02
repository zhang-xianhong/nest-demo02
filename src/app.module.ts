import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './testuser/user.controller';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { CatsController } from './testCats/cats.controller';
import { CatsModule } from './testCats/cats.module';
// import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { logger } from './common/middleware/logger.middleware';
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Connection } from 'typeorm';
// import { User } from './users/user.entity';

import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './users/user.model';
import { ArticleModule } from './article/article.module';
import { TypeModule } from './type/type.module';

@Module({
  imports: [CatsModule, UsersModule, SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',
    database: 'zxh_databases',
    // models: [UserModel],
    autoLoadModels: true,
    synchronize: true
  }), ArticleModule, TypeModule],
  controllers: [AppController, UserController, NewsController],
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
  // constructor(private readonly connection: Connection) {}
}
