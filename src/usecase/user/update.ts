import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "src/app/domain/user/dto/update-user.dto";
import { UserProtocol } from "src/app/domain/user/protocol/user.protocol";

@Injectable()
export class UpdateUserUsecase {
    
    constructor(
        private readonly repository: UserProtocol
    ){}

    async execute(id: string, body: UpdateUserDto){
        await this.repository.update(id, body);
    }

}
