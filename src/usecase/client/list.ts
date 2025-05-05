import { Injectable } from "@nestjs/common";
import { ClientEntity, ClientProps } from "src/app/domain/client/entities/client.entity";
import { ClientProtocol } from "src/app/domain/client/protocol/client.protocol";

@Injectable()
export class ListClientUsecase {

    constructor(
        private readonly protocol: ClientProtocol
    ){}

    async execte(){

        return await this.protocol.getAll();

    }

}
