import { Injectable } from "@nestjs/common";
import { EmployeeProtocol } from "src/app/domain/employee/protocol/employee.protocol";

@Injectable()
export class DeleteEmployeeUsecase {

    constructor(
        private readonly protocol:EmployeeProtocol
    ){}

    async execute(id: string){

        await this.protocol.delete(id);

    }

}
