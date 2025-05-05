import { Injectable } from "@nestjs/common";
import { UpdateClientDto } from "src/app/domain/client/dto/update-client.dto";
import { ClientProtocol } from "src/app/domain/client/protocol/client.protocol";

@Injectable()
export class UpdateClientUsecase {

    constructor(
        private readonly protocol: ClientProtocol
    ){}

    async execute(id: string, newBody: UpdateClientDto){

        return await this.protocol.update(id, newBody);

    }

}
