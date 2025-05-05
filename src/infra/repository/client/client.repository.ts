import { InjectRepository } from "@nestjs/typeorm";
import { ClientEntity } from "src/app/domain/client/entities/client.entity";
import { ClientModel } from "src/app/domain/client/model/client.model";
import { ClientProtocol } from "src/app/domain/client/protocol/client.protocol";
import { Repository } from "typeorm";

export class TypeORMClientRepository implements ClientProtocol {

    constructor(
        @InjectRepository(ClientModel)
        private readonly repository: Repository<ClientModel>
    ){}

    async create(body: ClientEntity): Promise<void>{

        const aClient = this.repository.create(body.allProps);
        await this.repository.save(aClient);

    }

    async getAll(): Promise<ClientModel[]>{
        return await this.repository.find();
    }

}