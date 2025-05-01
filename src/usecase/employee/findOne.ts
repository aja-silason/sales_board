import { Injectable } from "@nestjs/common";
import { EmployeeProtocol } from "src/app/domain/employee/protocol/employee.protocol";

@Injectable()
export class FindOneEmployeeUsecase {

    constructor(
        private readonly protocol: EmployeeProtocol
    ){}

    async execute(id: string){

        return await this.protocol.findOne(id);

    }

}
