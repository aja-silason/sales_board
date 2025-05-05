import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateClientDto } from "src/app/domain/client/dto/update-client.dto";
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

    async findOne(id: string): Promise<ClientModel | null | any> {

        const aClient = await this.repository.findOne({where: {id: id}});

        if(!aClient) throw new NotFoundException("Client not found");

        return aClient;

    }

    async update(id: string, newBody: UpdateClientDto): Promise<void> {

        const aClient = await this.repository.findOne({where: {id: id}});

        if(!aClient) throw new NotFoundException("Client not found");

        aClient.updatedAt = new Date();

        this.repository.merge(aClient, newBody);
   
        await this.repository.save(aClient);

    }

    async delete(id: string): Promise<void> {

        await this.findOne(id);
        await this.repository.delete(id);

    }

    async finByClientCode(clientCode: string): Promise<ClientModel | null | any> {

        const aClient = await this.repository.findOne({where: {clientCode: clientCode}});

        if(!aClient) throw new NotFoundException("Client code not found");

        return aClient;

    }

    async finByTelephone(telephone: string): Promise<ClientModel | null | any> {

        const aClient = await this.repository.findOne({where: {telephone: telephone}});

        if(!aClient) throw new NotFoundException("Client not found");

        return aClient;

    }

}