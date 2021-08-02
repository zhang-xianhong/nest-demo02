import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from './dto/user.dto';
import { UserModel } from './user.model';
import { Op } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel
  ) {}

  // private readonly users: UserDto[] = [];

  async findAll(): Promise<any> {
    console.log('findAll', this.userModel.findAll());
    const data = await this.userModel.findAll();
    return {
      data
    }
    // return this.userModel.findAll({ //排序
    //   order: [ ['id', 'DESC'] ]
    // });
    // where 参数用于过滤查询.where 子句有很多运算符,可以从 Op 中以 Symbols 的形式使用.
    // return this.userModel.findAll({
    //   where: {
    //     id: {
    //       [Op.eq]: 5
    //     }
    //   }
    // })
    // return this.userModel.findAll({ //查询特定属性
    //   attributes: ['firstName', 'lastName']
    // });
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
      console.log("createUser", user);
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
    console.log('removeId: ', id);
    // const user = await this.findOne(id);
    // console.log('removeUser', user);
    // await user.destroy();
    await this.userModel.destroy({
      where: {
        id: id
      }
    })
  }
}
