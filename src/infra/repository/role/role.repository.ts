import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRoleDto } from "src/app/domain/role/dto/create-role.dto";
import { RoleEntity } from "src/app/domain/role/entities/role.entity";
import { RoleModel } from "src/app/domain/role/model/role.model";
import { RoleProtocol } from "src/app/domain/role/protocol/role.protocol";
import { Repository } from "typeorm";

@Injectable()
export class TypeORMRoleRepository implements RoleProtocol {

    constructor(
        @InjectRepository(RoleModel)
        private roleRepository: Repository<RoleModel>
    ){}

    async create(role: RoleEntity): Promise<void> {
        const aRole = this.roleRepository.create(role.allProps);
        await this.roleRepository.save(aRole);
    }

    async findAll(): Promise<any[]> {
        return await this.roleRepository?.find();
    }

}