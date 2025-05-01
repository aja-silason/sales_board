import { Injectable } from "@nestjs/common";
import { RoleEntity, RoleProps } from "src/app/domain/role/entities/role.entity";
import { RoleProtocol } from "src/app/domain/role/protocol/role.protocol";

@Injectable()
export class CreateRoleUsecase {

    constructor(
        private readonly repository: RoleProtocol
    ){}

    public async execute(role: RoleProps){
        const aRole = RoleEntity.create(role);
        await this.repository.create(aRole);
    }

}
