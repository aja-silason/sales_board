import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RoleModel } from "src/app/domain/role/model/role.model";
import { RoleProtocol } from "src/app/domain/role/protocol/role.protocol";
import { CreateUserDto } from "src/app/domain/user/dto/create-user.dto";
import { UserEntity, UserProps } from "src/app/domain/user/entities/user.entity";
import { UserProtocol } from "src/app/domain/user/protocol/user.protocol";
import { Repository } from "typeorm";

@Injectable()
export class CreateUserUseCase {

    constructor(
        private readonly protocol: UserProtocol,
    ) {}

    public async execute(user: CreateUserDto) {

        const aUser = UserEntity?.create(user);

        await this?.protocol?.create(aUser);

    }

}
