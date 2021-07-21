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
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  index(): string {
    return 'Welcome Here';
  }

  @Get('findAll')
  findAll(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }

  @Post('create')
  async create(@Body() user: UserDto) {
    try {
      console.log('createUser', user);
      return await this.usersService.create(user);
    } catch (error) {
      console.log('error', error);
    }
  }

  @Get(':id')
  findOne(@Param() id: string): Promise<UserDto> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param() id: string, @Body() updateUser: UserDto): Promise<any> {
    return this.usersService.update(id, updateUser);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.usersService.remove(id);
  }
}
