import { ClientEntity } from "../entities/client.entity";
import { ClientModel } from "../model/client.model";

export abstract class ClientProtocol {
    abstract getAll(): Promise<ClientModel[]>;
    abstract create(body: ClientEntity): Promise<void>;
}
