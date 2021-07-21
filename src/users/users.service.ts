import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  private readonly users: User[] = [];

  findAll(): Promise<User[]> {
    console.log('find', this.usersRepository.find());
    return this.usersRepository.find();
  }

  async create(user: UserDto) {
    try {
      const temp = await this.usersRepository.create(user);
      console.log('temp', temp);
      return await this.usersRepository.save(temp);
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async update(id: string, @Body() updateUser: UserDto): Promise<any> {
    return await this.usersRepository.update(id, updateUser);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
