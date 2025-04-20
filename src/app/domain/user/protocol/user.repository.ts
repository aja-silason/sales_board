import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class UserProtocol {
    abstract findAll(): Promise<UserEntity[]>;
    abstract create(user: UserEntity): Promise<void>;
    abstract findOne(id: string): Promise<UserEntity | null>;
    abstract update(id: string, user: UpdateUserDto): Promise<void>;
    abstract delete(id: string): Promise<void>; 
}