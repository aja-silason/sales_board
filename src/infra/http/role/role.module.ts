import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModel } from 'src/app/domain/role/model/role.model';
import { CreateRoleUsecase } from 'src/usecase/role/create';
import { RoleProtocol } from 'src/app/domain/role/protocol/role.protocol';
import { TypeORMRoleRepository } from 'src/infra/repository/role/role.repository';
import { ListRoleUsecase } from 'src/usecase/role/list';
import { UpdateRoleUsecase } from 'src/usecase/role/update';
import { FindOneRoleUseCase } from 'src/usecase/role/findOne';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleModel])
  ],
  controllers: [RoleController],
  providers: [
    RoleService,
    CreateRoleUsecase,
    ListRoleUsecase,
    UpdateRoleUsecase,
    FindOneRoleUseCase,
    {
      provide: RoleProtocol,
      useClass: TypeORMRoleRepository
    }
  ],
})
export class RoleModule {}
