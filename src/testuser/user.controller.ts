import { Body, Controller, Get, Post, Render, Response, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
// @ApiTags("测试")
export class UserController {

    @Get() 
    @Render('default/user')
    index(): any {
        // return 'user';
    }

    @Post('doAdd') 
    doAdd(@Body() body, @Response() res) {
        console.log(body); //可以获取到default/user.ejs里面表单提交的数据
        res.redirect('/user'); //路由跳转,重定向
        // return '增加成功';
    }

    // @Get('cookie')
    // getCookie(@Request() req): any {
    //     // 获取cookie
    //     console.log(req.cookies);
    //     console.log(req.cookies.username);
    //     return req.cookies.username;
    // }


    // 获取加密的cookie信息
    @Get('cookie')
    getCookie(@Request() req): any {
        // 获取cookie
        console.log(req.signedCookies);
        console.log(req.signedCookies.username);
        return req.signedCookies.username;
    }
}
