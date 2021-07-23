import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from './dto/user.dto';
import { UserModel } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel
  ) {}

  // private readonly users: UserDto[] = [];

  async findAll(): Promise<UserModel[]> {
    console.log('find', this.userModel.findAll());
    return this.userModel.findAll();
  }

  async findOne(id: string): Promise<UserModel> {
    console.log('findOneID', id);
    return await this.userModel.findOne({
      where: {
        id: id
      }
    })
  }

  async create(user: UserModel): Promise<any> {
    try {
      // console.log("createUser", user);
      return await this.userModel.create(user);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateUser: UserDto): Promise<any> {
    // return await this.usersRepository.update(id, updateUser);
    console.log('updateId', id);
    console.log('updateUser', updateUser);
    return await this.userModel.update(updateUser, {
      where: {
        id
      }
    })
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
