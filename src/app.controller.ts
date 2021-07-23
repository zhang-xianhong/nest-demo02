import { Controller, Get, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('default/index') //写入Render渲染的装饰器，会渲染default文件夹下的index.ejs文件
  getHello(): any {
    // return this.appService.getHello();
    return {'name': '张三', "age": "20"};
  }


  // 使用session
  @Get('setSession')
  setSession(@Request() req): any {
    // 设置session
    req.session.username = '哈哈哈';
    return '';
  }

  // 获取session
  @Get('getSession')
  getSession(@Request() req): any {
    console.log(req.session);
    console.log(req.session.username);
    return '用户中心';
  }
}
