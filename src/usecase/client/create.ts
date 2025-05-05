import { ConflictException, Injectable } from "@nestjs/common";
import { ClientEntity, ClientProps } from "src/app/domain/client/entities/client.entity";
import { ClientProtocol } from "src/app/domain/client/protocol/client.protocol";

@Injectable()
export class CreateClientUsecase {

    constructor(
        private readonly protocol: ClientProtocol
    ){}

    async execute(body: ClientProps){

        const aClient = ClientEntity.create(body);


        const existClient = await this.protocol?.finByTelephone(body.telephone);

        if(existClient) throw new ConflictException("User telephone is already exists");

        await this.protocol.create(aClient);

        return {
            clientCode: aClient.allProps.clientCode
        }

    }

}
