import { UpdateUserDto } from "../dto/update-user.dto";
import { UserEntity } from "../entities/user.entity";
import { UserModel } from "../model/user.model";

export abstract class UserProtocol {
    abstract findAll(): Promise<UserModel[]>;
    abstract create(user: UserEntity): Promise<void>;
    abstract findOne(id: string): Promise<UserModel | null>;
    abstract update(id: string, user: UpdateUserDto): Promise<void>;
    abstract delete(id: string): Promise<void>; 
}