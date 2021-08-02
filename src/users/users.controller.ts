import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
// import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { UserModel } from './user.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags("用户信息")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({summary: "index"})
  index(): string {
    return 'Welcome Here';
  }

  @Get('findAll')
  @ApiOperation({summary: "查询所有"})
  findAll(): Promise<any> {
    return this.usersService.findAll();
  }

  @Post('create')
  @ApiOperation({summary: "插入信息"})
  async create(@Body() user: UserModel) {
    try {
      // console.log('createUser', user);
      return await this.usersService.create(user);
    } catch (error) {
      console.log('error', error);
    }
  }

  @Get(':id')
  @ApiOperation({summary: "查询一条"})
  findOne(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({summary: "更新数据"})
  update(@Param('id') id: number, @Body() updateUser: UserDto): Promise<any> {
    return this.usersService.update(id, updateUser);
  }

  @Delete('/delete/:id')
  @ApiOperation({summary: "删除"})
  async remove(@Param('id') id: string): Promise<void> {
    await this.usersService.remove(id);
  }
}
