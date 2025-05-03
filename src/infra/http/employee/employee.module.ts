import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModel } from 'src/app/domain/employee/model/employee.model';
import { TypeORMEmployeeRepository } from 'src/infra/repository/employee/employee.repository';
import { EmployeeProtocol } from 'src/app/domain/employee/protocol/employee.protocol';
import { CreateEmployeeUsecase } from 'src/usecase/employee/create';
import { ListEmployeeUsecase } from 'src/usecase/employee/list';
import { FindOneEmployeeUsecase } from 'src/usecase/employee/findOne';
import { UpdateEmployeeUsecase } from 'src/usecase/employee/update';
import { DeleteEmployeeUsecase } from 'src/usecase/employee/delete';
import { UserModel } from 'src/app/domain/user/model/user.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeModel, UserModel])
  ],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    CreateEmployeeUsecase,
    ListEmployeeUsecase,
    FindOneEmployeeUsecase,
    UpdateEmployeeUsecase,
    DeleteEmployeeUsecase,
    {
      provide: EmployeeProtocol,
      useClass: TypeORMEmployeeRepository
    }
  ],
})
export class EmployeeModule {}
