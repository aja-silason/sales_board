import { Injectable } from "@nestjs/common";
import { ClientProtocol } from "src/app/domain/client/protocol/client.protocol";

@Injectable()
export class FindOneClientCodeClientUsecase {

    constructor(
        private readonly protocol: ClientProtocol
    ){}

    async execute(clientCode: string){

        return await this.protocol.finByClientCode(clientCode);

    }

}
