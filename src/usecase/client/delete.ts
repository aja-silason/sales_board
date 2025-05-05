import { Injectable } from "@nestjs/common";
import { ClientProtocol } from "src/app/domain/client/protocol/client.protocol";

@Injectable()
export class DeleteClientUsecase {

    constructor(
        private readonly protocol: ClientProtocol
    ){}

    async execute(id: string){

        return await this.protocol.delete(id);

    }

}
