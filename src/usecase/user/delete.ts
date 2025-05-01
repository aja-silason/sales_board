import { Injectable } from "@nestjs/common";
import { UserProtocol } from "src/app/domain/user/protocol/user.protocol";

@Injectable()
export class DeleteUserUsecase {

    constructor(
        private readonly protocol: UserProtocol
    ){}

    async execute(id: string){
        await this.protocol.delete(id);
    }

}