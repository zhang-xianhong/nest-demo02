import { Controller, Get, Render } from '@nestjs/common';
// 引入当前news的服务
import { NewsService } from './news.service';
@Controller('news')
export class NewsController { //控制器Controller通过nest g controller controller_name创建

    constructor(private newsService: NewsService) {} //实例化服务

    // 在Controller里面控制路由
    @Get()
    @Render('default/news')
    index() {
        //  获取newsService里面的方法
        // console.log(this.newsService.findAll()); //服务里面findAll方法的数据

        return {
            newsList: this.newsService.findAll()
        }
    }
}
