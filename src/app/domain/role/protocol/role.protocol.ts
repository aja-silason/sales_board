import { CreateRoleDto } from "../dto/create-role.dto";
import { UpdateRoleDto } from "../dto/update-role.dto";
import { RoleEntity } from "../entities/role.entity";

export abstract class RoleProtocol {
    abstract findAll(): Promise<RoleEntity[]>;
    abstract create(role: RoleEntity): Promise<void>;
    abstract update(id: string, role: UpdateRoleDto): Promise<void>;
    abstract findOne(id: string): Promise<RoleEntity | null | null>;
    abstract delete(id: string): Promise<void>;
}