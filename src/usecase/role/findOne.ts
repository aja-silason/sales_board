import { Injectable } from "@nestjs/common";
import { RoleProtocol } from "src/app/domain/role/protocol/role.protocol";

@Injectable()
export class FindOneRoleUseCase {

    constructor(
        private readonly protocol: RoleProtocol
    ){}

    async execute(id: string){
        return await this.protocol.findOne(id);
    }

}
