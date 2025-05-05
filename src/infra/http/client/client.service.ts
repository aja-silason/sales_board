import { Injectable } from '@nestjs/common';
import { CreateClientDto } from '../../../app/domain/client/dto/create-client.dto';
import { UpdateClientDto } from '../../../app/domain/client/dto/update-client.dto';
import { CreateClientUsecase } from 'src/usecase/client/create';
import { ListClientUsecase } from 'src/usecase/client/list';
import { FindOneClientUsecase } from 'src/usecase/client/findOne';
import { FindOneClientCodeClientUsecase } from 'src/usecase/client/findOneClientCode';
import { UpdateClientUsecase } from 'src/usecase/client/update';
import { DeleteClientUsecase } from 'src/usecase/client/delete';

@Injectable()
export class ClientService {

  constructor(
    private readonly createClientUsecase: CreateClientUsecase,
    private readonly listClientUsecase: ListClientUsecase,
    private readonly findOneClientUsecase: FindOneClientUsecase,
    private readonly findOneCodeClientUsecase: FindOneClientCodeClientUsecase,
    private readonly updateClientUsecase: UpdateClientUsecase,
    private readonly deleteClientUsecase: DeleteClientUsecase,
  ){}

  async create(body: CreateClientDto) {
    return await this.createClientUsecase.execte(body);
  }

  async findAll() {
    return await this.listClientUsecase.execte();
  }

  async findOne(id: string) {
    return await this.findOneClientUsecase.execute(id);
  }

  async update(id: string, newBody: UpdateClientDto) {
    return await this.updateClientUsecase.execute(id, newBody);
  }

  async remove(id: string) {
    return await this.deleteClientUsecase.execute(id);
  }

  async findOneClientCode(id: string) {
    return await this.findOneCodeClientUsecase.execute(id);
  }
}
