import { CreateRoleDto } from "../dto/create-role.dto";
import { RoleEntity } from "../entities/role.entity";

export abstract class RoleProtocol {
    abstract findAll(): Promise<RoleEntity[]>;
    abstract create(role: RoleEntity): Promise<void>;
}