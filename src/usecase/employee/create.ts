import { Injectable } from "@nestjs/common";
import { CreateEmployeeDto } from "src/app/domain/employee/dto/create-employee.dto";
import { EmployeeEntity } from "src/app/domain/employee/entities/employee.entity";
import { EmployeeProtocol } from "src/app/domain/employee/protocol/employee.protocol";

@Injectable()
export class CreateEmployeeUsecase {

    constructor(
        private readonly protocol: EmployeeProtocol
    ){}

    async execute(body: CreateEmployeeDto) {

        const aEmployee = EmployeeEntity.create(body);

        await this.protocol.create(aEmployee);
    }

}
