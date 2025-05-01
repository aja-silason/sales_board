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

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeModel])
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
