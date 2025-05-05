import { UpdateClientDto } from "../dto/update-client.dto";
import { ClientEntity } from "../entities/client.entity";
import { ClientModel } from "../model/client.model";

export abstract class ClientProtocol {
    abstract getAll(): Promise<ClientModel[]>;
    abstract create(body: ClientEntity): Promise<void>;
    abstract findOne(id: string): Promise<ClientModel | null | any>;
    abstract delete(id: string): Promise<void>;
    abstract update(id: string, newBody: UpdateClientDto): Promise<void>;
    abstract finByClientCode(clientCode: string): Promise<ClientModel | null | any>;
    abstract finByTelephone(telephone: string): Promise<ClientModel | null | any>;
}
