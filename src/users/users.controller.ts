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

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  index(): string {
    return 'Welcome Here';
  }

  @Get('findAll')
  findAll(): Promise<UserModel[]> {
    return this.usersService.findAll();
  }

  @Post('create')
  async create(@Body() user: UserModel) {
    try {
      // console.log('createUser', user);
      return await this.usersService.create(user);
    } catch (error) {
      console.log('error', error);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUser: UserDto): Promise<any> {
    return this.usersService.update(id, updateUser);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.usersService.remove(id);
  }
}
