import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRoleDto } from "src/app/domain/role/dto/create-role.dto";
import { UpdateRoleDto } from "src/app/domain/role/dto/update-role.dto";
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

    async update(id: string, role: UpdateRoleDto): Promise<void> {

        const aRole = await this.roleRepository.findOne({where: {id: id}});

        if(!aRole) throw new NotFoundException('That role does not exist');
        
        aRole.updatedAt = new Date();

        this.roleRepository.merge(aRole, role);

        await this.roleRepository.save(aRole);

    }

}