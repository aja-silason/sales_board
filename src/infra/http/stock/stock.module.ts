import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockModel } from 'src/app/domain/stock/model/stock.model';
import { StockProtocol } from 'src/app/domain/stock/protocol/stock.protocol';
import { TypeORMStockRepository } from 'src/infra/repository/stock/stock.repository';
import { CreateStockUsecase } from 'src/usecase/stock/create';
import { ListStockUsecase } from 'src/usecase/stock/list';
import { FindOneStockUsecase } from 'src/usecase/stock/findOne';
import { UpdateStockUsecase } from 'src/usecase/stock/update';
import { DeleteStockUsecase } from 'src/usecase/stock/delete';

@Module({
  imports: [
    TypeOrmModule.forFeature([StockModel])
  ],
  controllers: [StockController],
  providers: [
    StockService,
    CreateStockUsecase,
    ListStockUsecase,
    FindOneStockUsecase,
    UpdateStockUsecase,
    DeleteStockUsecase,
    {
      provide: StockProtocol,
      useClass: TypeORMStockRepository
    }
  ],
})
export class StockModule {}
