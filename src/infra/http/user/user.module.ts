import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProtocol } from 'src/app/domain/user/protocol/user.protocol';
import { TypeORMUserRepository } from 'src/infra/repository/user/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from 'src/app/domain/user/model/user.model';
import { CreateUserUseCase } from 'src/usecase/user/create';
import { ListUserUsecase } from 'src/usecase/user/list';
import { DeleteUserUsecase } from 'src/usecase/user/delete';
import { FindOneUserUsecase } from 'src/usecase/user/findOne';
import { UpdateUserUsecase } from 'src/usecase/user/update';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel])
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
      useClass: TypeORMUserRepository
    }
  ],
})
export class UserModule {}
