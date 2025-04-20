import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/app/domain/user/dto/create-user.dto";
import { UserEntity, UserProps } from "src/app/domain/user/entities/user.entity";
import { UserProtocol } from "src/app/domain/user/protocol/user.repository";

@Injectable()
export class CreateUserUseCase {

    constructor(
        private readonly reposistory: UserProtocol
    ) {}

    public async execute(user: UserProps) {

        /*const payload: UserProps = {
            email,
            firstName,
            lastName,
            password,
            userName
        }*/

        const aUser = UserEntity?.create(user);

        await this?.reposistory?.create(aUser);

    }

}
