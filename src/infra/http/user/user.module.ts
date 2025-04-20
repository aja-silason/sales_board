import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProtocol } from 'src/app/domain/user/protocol/user.repository';
import { TypeORMUserRepository } from 'src/infra/repository/user/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from 'src/app/domain/user/model/user.model';
import { CreateUserUseCase } from 'src/usecase/user/create';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel])
  ],
  controllers: [UserController],
  providers: [
    UserService,
    CreateUserUseCase,
    {
      provide: UserProtocol,
      useClass: TypeORMUserRepository
    }
  ],
})
export class UserModule {}
