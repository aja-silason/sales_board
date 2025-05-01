import { Injectable } from "@nestjs/common";
import { EmployeeProtocol } from "src/app/domain/employee/protocol/employee.protocol";

@Injectable()
export class ListEmployeeUsecase {

    constructor(
        private readonly protocol: EmployeeProtocol
    ){}

    async execute(){

        return await this.protocol.findAll();

    }

}
