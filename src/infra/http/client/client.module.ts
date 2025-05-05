import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModel } from 'src/app/domain/client/model/client.model';
import { ClientProtocol } from 'src/app/domain/client/protocol/client.protocol';
import { TypeORMClientRepository } from 'src/infra/repository/client/client.repository';
import { CreateClientUsecase } from 'src/usecase/client/create';
import { ListClientUsecase } from 'src/usecase/client/list';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClientModel])
  ],
  controllers: [ClientController],
  providers: [
    ClientService,
    CreateClientUsecase,
    ListClientUsecase,
    {
      provide: ClientProtocol,
      useClass: TypeORMClientRepository
    }
  ],
})
export class ClientModule {}
