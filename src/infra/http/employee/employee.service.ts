import { HttpException, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from '../../../app/domain/employee/dto/create-employee.dto';
import { UpdateEmployeeDto } from '../../../app/domain/employee/dto/update-employee.dto';
import { CreateEmployeeUsecase } from 'src/usecase/employee/create';
import { DeleteEmployeeUsecase } from 'src/usecase/employee/delete';
import { ListEmployeeUsecase } from 'src/usecase/employee/list';
import { FindOneEmployeeUsecase } from 'src/usecase/employee/findOne';
import { UpdateEmployeeUsecase } from 'src/usecase/employee/update';

@Injectable()
export class EmployeeService {

  constructor(
    private readonly createUsecase: CreateEmployeeUsecase,
    private readonly lisUsecase: ListEmployeeUsecase,
    private readonly findOneUsecase: FindOneEmployeeUsecase,
    private readonly updateUsecase: UpdateEmployeeUsecase,
    private readonly delteUsecase: DeleteEmployeeUsecase,
  ){}

  create(body: CreateEmployeeDto) {
    try {

      return this.createUsecase.execute(body)
      
    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  findAll() {
    try {
      return this.lisUsecase.execute();
    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  findOne(id: string) {
    try {
      return this.findOneUsecase.execute(id);
    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  update(id: string, newData: UpdateEmployeeDto) {
    try {
      return this.updateUsecase.execute(id, newData)
    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }

  remove(id: string) {
    try {
     return this.delteUsecase.execute(id);
    } catch (error) {
      throw new HttpException(error?.message, error?.statusCode);
    }
  }
}
