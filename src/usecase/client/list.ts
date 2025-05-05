import { Injectable } from "@nestjs/common";
import { ClientProtocol } from "src/app/domain/client/protocol/client.protocol";

@Injectable()
export class ListClientUsecase {

    constructor(
        private readonly protocol: ClientProtocol
    ){}

    async execute(){

        return await this.protocol.getAll();

    }

}
