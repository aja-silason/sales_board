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

  async create(role: CreateRoleDto) {

      return await this.createRoleUsecase.execute(role);
  }

  async findAll() {
      
      return await this.listRoleUsecase.execute();

  }

  async findOne(id: string) {
      
    return await this.findOneRoleUsecase.execute(id)

  }

  async  update(id: string, role: UpdateRoleDto) {
      
      return await this.updateRoleUsecase.execute(id, role)

  }

  async  remove(id: string) {
      
    return await this.deleteRoleUsecase.execute(id);

  }
}
