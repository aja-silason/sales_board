import { HttpException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../../../app/domain/role/dto/create-role.dto';
import { UpdateRoleDto } from '../../../app/domain/role/dto/update-role.dto';
import { CreateRoleUsecase } from 'src/usecase/role/create';
import { ListRoleUsecase } from 'src/usecase/role/list';
import { UpdateRoleUsecase } from 'src/usecase/role/update';
import { FindOneRoleUseCase } from 'src/usecase/role/findOne';

@Injectable()
export class RoleService {

  constructor(
    private readonly createRoleUsecase: CreateRoleUsecase,
    private readonly listRoleUsecase: ListRoleUsecase,
    private readonly updateRoleUsecase: UpdateRoleUsecase,
    private readonly findOneRoleUsecase: FindOneRoleUseCase,
  ){}

  async create(role: CreateRoleDto) {
    try {

      await this.createRoleUsecase.execute(role);

    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  async findAll() {
    try {
      
      return await this.listRoleUsecase.execute();

    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  async findOne(id: string) {
    try {

      return await this.findOneRoleUsecase.execute(id)
      
    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  async update(id: string, role: UpdateRoleDto) {
    try {
      
      await this.updateRoleUsecase.execute(id, role)

    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
