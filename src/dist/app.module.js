"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var user_controller_1 = require("./testuser/user.controller");
var news_service_1 = require("./news/news.service");
var news_controller_1 = require("./news/news.controller");
var article_controller_1 = require("./article/article.controller");
var cats_module_1 = require("./cats/cats.module");
// import { MongooseModule } from '@nestjs/mongoose';
var typeorm_1 = require("@nestjs/typeorm");
var user_module_1 = require("./users/user.module");
var AppModule = /** @class */ (function () {
    function AppModule(connection) {
        this.connection = connection;
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [cats_module_1.CatsModule, user_module_1.UsersModule, typeorm_1.TypeOrmModule.forRoot({
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
            controllers: [app_controller_1.AppController, user_controller_1.UserController, news_controller_1.NewsController, article_controller_1.ArticleController],
            providers: [app_service_1.AppService, news_service_1.NewsService]
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
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
