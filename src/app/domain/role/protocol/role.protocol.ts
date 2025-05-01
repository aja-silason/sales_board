import { CreateRoleDto } from "../dto/create-role.dto";

export abstract class RoleProtocol {
    abstract create(role: CreateRoleDto): Promise<void>;
}