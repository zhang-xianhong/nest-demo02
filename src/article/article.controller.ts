import { Controller, Get, Response } from '@nestjs/common';
import { NewsService } from '../news/news.service';
@Controller('article')
export class ArticleController {

    constructor(private newsService: NewsService) {}

    // @Get()
    // indexArticle(): any {
    //     return this.newsService.findAll();
    // }


    // @Get()
    // indexArticle(@Response() res): any {
    //     res.cookie('username','zhangxianhong',{maxAge: 14000, httpOnly: true})
    //     // maxAge设置cookie的过期时间
    //     // 设置cookie
    //     // return this.newsService.findAll();
    //     res.send('这是文章页面');
    // }

    // 设置加密的cookie
    @Get()
    indexArticle(@Response() res): any {
        res.cookie('username','zhangxianhong',{maxAge: 5555000, httpOnly: true, signed: true})
        // maxAge设置cookie的过期时间
        // 设置cookie
        // return this.newsService.findAll();
        res.send('这是文章页面'); //如果使用了Response装饰器，一般情况下不是直接return，而是写res.send()方法
    }
}
