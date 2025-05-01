import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProtocol } from 'src/app/domain/user/protocol/user.protocol';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from 'src/app/domain/user/model/user.model';
import { CreateUserUseCase } from 'src/usecase/user/create';
import { ListUserUsecase } from 'src/usecase/user/list';
import { DeleteUserUsecase } from 'src/usecase/user/delete';
import { FindOneUserUsecase } from 'src/usecase/user/findOne';
import { UpdateUserUsecase } from 'src/usecase/user/update';
import { TypeORMuserRepositorysitory } from 'src/infra/repository/user/user.repository';
import { RoleProtocol } from 'src/app/domain/role/protocol/role.protocol';
import { TypeORMRoleRepository } from 'src/infra/repository/role/role.repository';
import { RoleModel } from 'src/app/domain/role/model/role.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel, RoleModel])
  ],
  controllers: [UserController],
  providers: [
    UserService,
    CreateUserUseCase,
    ListUserUsecase,
    DeleteUserUsecase,
    FindOneUserUsecase,
    UpdateUserUsecase,
    {
      provide: UserProtocol,
      useClass: TypeORMuserRepositorysitory
    },
    {
      provide: RoleProtocol,
      useClass: TypeORMRoleRepository
    }
  ],
})
export class UserModule {}
