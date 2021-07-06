import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService { //服务通过nest g service service_name 创建
    // 服务可以进行共用
    
    findAll(): any {
        return [
            {'title': '新闻111'},
            {'title': '新闻222'},
            {'title': '新闻333'},
        ]
    }
}
