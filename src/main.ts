import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useStaticAssets('public'); //http://localhost:3000/1.png
  app.useStaticAssets(join(__dirname, '..', 'public'), { //配置静态资源路径及虚拟目录 //http://localhost:3000/static/1.png
    prefix: '/static',
  });

  // 使用模板引擎渲染，使用ejs
  // 安装： cnpm i ejs --save
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');

  // 配置cookie中间件， 在article.controller.ts中使用 
  // app.use(cookieParser());  //不加密
  // 设置cookie（加密）
  app.use(cookieParser('123456'));


  // 设置session，在app.controller.ts里面使用
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {maxAge: 9000, httpOnly: true},   
      rolling: true //rolling设置时间回滚，当设置的过期时间到时，会重新进行计时
    }),
  );

  await app.listen(3000);
}
bootstrap();

// 配置模板引擎和静态资源都是在main.js 文件中进行配置

// 使用模板引擎渲染，使用ejs
// 安装： cnpm i ejs --save