import { Injectable } from "@nestjs/common";
import { UserProtocol } from "src/app/domain/user/protocol/user.protocol";

@Injectable()
export class FindOneUserUsecase {

    constructor(
        private readonly protocol: UserProtocol
    ){}

    async execute(id: string){
        return await this.protocol.findOne(id);
    }

}
