import { Injectable } from "@nestjs/common";
import { RoleProtocol } from "src/app/domain/role/protocol/role.protocol";

@Injectable()
export class DeleteRoleUsecase {

    constructor(
        private readonly protocol: RoleProtocol
    ){}

    async execute(id: string){
        await this.protocol.delete(id)
    }

}
