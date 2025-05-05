import { Injectable } from "@nestjs/common";
import { ClientEntity, ClientProps } from "src/app/domain/client/entities/client.entity";
import { ClientProtocol } from "src/app/domain/client/protocol/client.protocol";

@Injectable()
export class CreateClientUsecase {

    constructor(
        private readonly protocol: ClientProtocol
    ){}

    async execte(body: ClientProps){

        const aClient = ClientEntity.create(body);
        
        console.log("Client with the code", aClient);

        //await this.

    }

}
