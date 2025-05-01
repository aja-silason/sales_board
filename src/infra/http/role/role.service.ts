import { HttpException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../../../app/domain/role/dto/create-role.dto';
import { UpdateRoleDto } from '../../../app/domain/role/dto/update-role.dto';
import { CreateRoleUsecase } from 'src/usecase/role/create';
import { ListRoleUsecase } from 'src/usecase/role/list';

@Injectable()
export class RoleService {

  constructor(
    private readonly createRoleUsecase: CreateRoleUsecase,
    private readonly listRoleUsecase: ListRoleUsecase,
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

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
