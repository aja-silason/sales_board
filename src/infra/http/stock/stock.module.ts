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
import { ProductProtocol } from 'src/app/domain/product/protocol/product.protocol';
import { TypeORMProductRepository } from 'src/infra/repository/product/product.repository';
import { ProductModel } from 'src/app/domain/product/model/product.model';
import { DecrementStockUsecase } from 'src/usecase/stock/decrement';
import { EcrementStockUsecase } from 'src/usecase/stock/ecrement';

@Module({
  imports: [
    TypeOrmModule.forFeature([StockModel, ProductModel])
  ],
  controllers: [StockController],
  providers: [
    StockService,
    CreateStockUsecase,
    ListStockUsecase,
    FindOneStockUsecase,
    UpdateStockUsecase,
    DeleteStockUsecase,
    DecrementStockUsecase,
    EcrementStockUsecase,
    {
      provide: StockProtocol,
      useClass: TypeORMStockRepository
    },
    {
      provide: ProductProtocol,
      useClass: TypeORMProductRepository
    }
  ],
})
export class StockModule {}
