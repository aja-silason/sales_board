import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../../app/domain/user/dto/create-user.dto';
import { UpdateUserDto } from '../../../app/domain/user/dto/update-user.dto';
import { CreateUserUseCase } from 'src/usecase/user/create';
import { ListUserUsecase } from 'src/usecase/user/list';
import { DeleteUserUsecase } from 'src/usecase/user/delete';
import { FindOneUserUsecase } from 'src/usecase/user/findOne';
import { UpdateUserUsecase } from 'src/usecase/user/update';

@Injectable()
export class UserService {

  constructor(
    private readonly createUserUsecase: CreateUserUseCase,
    private readonly listUserUsecase: ListUserUsecase,
    private readonly deleteUserUsecase: DeleteUserUsecase,
    private readonly findOneUserUsecase: FindOneUserUsecase,
    private readonly updateUserUsecase: UpdateUserUsecase,
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

  async findOne(id: string) {
    try {
      
      return await this.findOneUserUsecase.execute(id);

    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      
      await this.updateUserUsecase.execute(id, updateUserDto)

    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  async remove(id: string) {
    try {

      await this.deleteUserUsecase.execute(id);

    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }
}
