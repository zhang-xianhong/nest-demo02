/* cats.controller.ts */

import { Controller, Get, Query, Post, Body, Put, Param, Delete, UsePipes, UseInterceptors, Req, HttpCode } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/create-cat.do';

import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ValidationPipe } from './validate.pipe';
import { LoggingInterceptor } from './logging.interceptor';
import { Request } from 'express';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  
  constructor(private readonly catsService: CatsService) {} //service通过类构造函数注入

  // @Get()
  // findAll(@Req() request: Request): string {
  //   // console.log(request);
  //   return 'This action returns all cats';
  // }
  
  @Get()
  async findAll(): Promise<Cat []> {
      return this.catsService.findAll();
  }

  @Post()
//   @UsePipes(new JoiValidationPipe(createSchema))
  @UsePipes(ValidationPipe)
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

//   @Get()
//   findAll(@Query() query: ListAllEntities) {
//     return `This action returns all cats (limit: ${query.limit} items)`;
//   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log("params.id", id);
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

}
