import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateArticleDto {

    @IsNotEmpty()
    @IsString() 
    @ApiProperty({description: "标题"})
    articleTitle: string;

    @IsString()
    @ApiProperty({description: "内容"})
    articleContent: string;

    @IsString()
    @ApiProperty({description: "简介"})
    articleIntroduce: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({description: '次数'})
    viewCount: number;
    
}