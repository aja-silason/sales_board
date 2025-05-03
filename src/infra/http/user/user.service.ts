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

  create(createUserDto: CreateUserDto) {

    try {

      return this.createUserUsecase.execute(createUserDto);
      
    } catch (error) {
      throw new HttpException(error.message, error.statusCode)
    }

  }

  findAll() {
    try {
      
      return this.listUserUsecase.execute();

    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }

  findOne(id: string) {
    try {
      
      return this.findOneUserUsecase.execute(id);

    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    try {
      
      return this.updateUserUsecase.execute(id, updateUserDto)

    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  remove(id: string) {
    try {

      return this.deleteUserUsecase.execute(id);

    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }
}
