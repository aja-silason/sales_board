import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../../app/domain/user/dto/create-user.dto';
import { UpdateUserDto } from '../../../app/domain/user/dto/update-user.dto';
import { CreateUserUseCase } from 'src/usecase/user/create';
import { ListUserUsecase } from 'src/usecase/user/list';

@Injectable()
export class UserService {

  constructor(
    private readonly createUserUsecase: CreateUserUseCase,
    private readonly listUserUsecase: ListUserUsecase,
  ) {}

  async create(createUserDto: CreateUserDto) {

    try {

      await this.createUserUsecase.execute(createUserDto);
      
    } catch (error) {
      throw new HttpException(error.message, error.statusCode)
    }

  }

  async findAll() {
    try {
      
      return await this.listUserUsecase.execute();

    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
