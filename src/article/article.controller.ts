import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { QueryPipe, SearchQuery } from 'src/shared/pipes/query.pipe';
import { ArticleModel } from './article.model';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}
    @Get()
    index(): string {
        return 'Article Page';
    }

    @Get('getArticleList')
    findAll(@Query(new QueryPipe()) query: SearchQuery): Promise<any> {
        return this.articleService.findAll(query);
    }

    @Post()
    create(@Body() createArticleDto: CreateArticleDto) {
        return this.articleService.create(createArticleDto);
    }

    @Post('delete/:id')
    remove(@Param('id') id: number): Promise<any> {
        return this.articleService.remove(id);
    }

    @Post('update/:id')
    update(@Param('id') id: number, @Body() updateArticleDto: UpdateArticleDto) {
        return this.articleService.update(id, updateArticleDto);
    }
}
