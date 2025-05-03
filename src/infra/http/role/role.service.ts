import { HttpException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../../../app/domain/role/dto/create-role.dto';
import { UpdateRoleDto } from '../../../app/domain/role/dto/update-role.dto';
import { CreateRoleUsecase } from 'src/usecase/role/create';
import { ListRoleUsecase } from 'src/usecase/role/list';
import { UpdateRoleUsecase } from 'src/usecase/role/update';
import { FindOneRoleUseCase } from 'src/usecase/role/findOne';
import { DeleteRoleUsecase } from 'src/usecase/role/delete';

@Injectable()
export class RoleService {

  constructor(
    private readonly createRoleUsecase: CreateRoleUsecase,
    private readonly listRoleUsecase: ListRoleUsecase,
    private readonly updateRoleUsecase: UpdateRoleUsecase,
    private readonly findOneRoleUsecase: FindOneRoleUseCase,
    private readonly deleteRoleUsecase: DeleteRoleUsecase,
  ){}

  create(role: CreateRoleDto) {
    try {

      return this.createRoleUsecase.execute(role);

    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  findAll() {
    try {
      
      return this.listRoleUsecase.execute();

    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  findOne(id: string) {
    try {

      return this.findOneRoleUsecase.execute(id)
      
    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  update(id: string, role: UpdateRoleDto) {
    try {
      
      return this.updateRoleUsecase.execute(id, role)

    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  remove(id: string) {
    try {

      return this.deleteRoleUsecase.execute(id);
      
    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }
}
