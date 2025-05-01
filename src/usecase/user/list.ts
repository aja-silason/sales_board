import { Injectable } from "@nestjs/common";
import { UserProtocol } from "src/app/domain/user/protocol/user.protocol";

@Injectable()
export class ListUserUsecase {

    constructor(
        private readonly protocol: UserProtocol
    ){}

    public async execute(){
        return await this.protocol?.findAll();
    }


}