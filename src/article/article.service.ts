import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { SearchQuery } from 'src/shared/pipes/query.pipe';
import { Deleted } from 'src/shared/types/response';
import { escapeLike } from 'src/shared/utils/sql';
import { ArticleModel } from './article.model';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
    constructor(@InjectModel(ArticleModel) private articleModel: typeof ArticleModel) {}

    async findAll(query: SearchQuery): Promise<any> {
        // const { rows = [], count } = await this.articleModel.findAndCountAll();
        const where: any = {};
        if(query.keyword) {
            const likeString = escapeLike(query.keyword);
            where.articleTitle = {
                [Op.like]: likeString,
            }
        }
        if(query.typeId) {
            where.typeId = query.typeId;
        }
        const { conditions = {} } = query as { conditions: { [key: string]: any } };
        conditions.where = where;
        const { rows = [], count } = await this.articleModel.findAndCountAll(conditions);
        return {
            rows,
            count
        }
    }

    async create(createArticleDto: CreateArticleDto) {
        try {
            console.log('createArticle', createArticleDto);
            const article = new ArticleModel({
                ...createArticleDto,
                // createTime: new Date(),
                addTime: new Date()
            })
            // return this.articleModel.create(createArticleDto);
            const res = await article.save();
            // console.log(res);
            // return res
            return {
                code: 0,
                rows: res
            }
        } catch (error) {
            console.log(error);
        }
    }

    async remove(id: number): Promise<any> {
        console.log('id: ', id);
        const removeId = await this.articleModel.destroy({
            where: {
                id
            }
        })
        // console.log('removeId', removeId);
        return {
            code: 0,
            id: removeId
        }
    }

    async update(id: number, updateArticleDto: UpdateArticleDto): Promise<any> {
        console.log('updateId', id);
        console.log('updateArticleDto', updateArticleDto);
        const updateForm = {
            ...updateArticleDto,
            // createTime: new Date(),
            updateTime: new Date()
        }
        const res = await this.articleModel.update(updateForm, {
            where: {
                id
            }
        })
        // console.log('updateRes', res);
        return {
            code: 0,
            res
        }
    }
}
