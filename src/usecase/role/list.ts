import { Injectable } from "@nestjs/common";
import { RoleProtocol } from "src/app/domain/role/protocol/role.protocol";

@Injectable()
export class ListRoleUsecase {

    constructor(
        private readonly protocol: RoleProtocol
    ) {}

    async execute(){
        return await this?.protocol?.findAll();
    }

}
