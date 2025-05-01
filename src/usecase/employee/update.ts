import { Injectable } from "@nestjs/common";
import { UpdateEmployeeDto } from "src/app/domain/employee/dto/update-employee.dto";
import { EmployeeProtocol } from "src/app/domain/employee/protocol/employee.protocol";

@Injectable()
export class UpdateEmployeeUsecase {

    constructor(
        private readonly protocol: EmployeeProtocol 
    ){}

    async execute(id: string, newBody: UpdateEmployeeDto){

        await this.protocol.update(id, newBody);

    }

}
