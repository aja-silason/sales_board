import { Injectable } from '@nestjs/common';
import { CreateClientDto } from '../../../app/domain/client/dto/create-client.dto';
import { UpdateClientDto } from '../../../app/domain/client/dto/update-client.dto';
import { CreateClientUsecase } from 'src/usecase/client/create';
import { ListClientUsecase } from 'src/usecase/client/list';

@Injectable()
export class ClientService {

  constructor(
    private readonly createClientUsecase: CreateClientUsecase,
    private readonly listClientUsecase: ListClientUsecase,
  ){}

  async create(body: CreateClientDto) {
    return await this.createClientUsecase.execte(body);
  }

  async findAll() {
    return await this.listClientUsecase.execte();
  }

  async findOne(id: string) {
    return await `This action returns a #${id} client`;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    return await `This action updates a #${id} client`;
  }

  async remove(id: string) {
    return await `This action removes a #${id} client`;
  }
}
