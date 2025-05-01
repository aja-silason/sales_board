import { Injectable } from "@nestjs/common";
import { UserProtocol } from "src/app/domain/user/protocol/user.protocol";

@Injectable()
export class FindOneUserUsecase {

    constructor(
        private readonly repository: UserProtocol
    ){}

    async execute(id: string){
        return await this.repository.findOne(id);
    }

}
