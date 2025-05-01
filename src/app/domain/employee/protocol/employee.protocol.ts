import { UpdateEmployeeDto } from "../dto/update-employee.dto";
import { EmployeeEntity } from "../entities/employee.entity";
import { EmployeeModel } from "../model/employee.model";

export abstract class EmployeeProtocol {

    abstract create(body: EmployeeEntity): Promise<void>;
    abstract findAll(): Promise<EmployeeModel>;
    abstract findOne(id: string): Promise<EmployeeModel | null | any>;
    abstract delete(id: string): Promise<void>;
    abstract update(id: string, newBody: UpdateEmployeeDto): Promise<void>;
}
