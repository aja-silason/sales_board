import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModel } from 'src/app/domain/product/model/product.model';
import { ProductProtocol } from 'src/app/domain/product/protocol/product.protocol';
import { TypeORMProductRepository } from 'src/infra/repository/product/product.repository';
import { CreateProductUsecase } from 'src/usecase/product/create';
import { DeleteProductUsecase } from 'src/usecase/product/delete';
import { ListProductUsecase } from 'src/usecase/product/list';
import { UpdateProductUsecase } from 'src/usecase/product/update';
import { FindOneProductUsecase } from 'src/usecase/product/findOne';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductModel])
  ],
  controllers: [ProductController],
  providers: [
    ProductService,
    CreateProductUsecase,
    DeleteProductUsecase,
    ListProductUsecase,
    UpdateProductUsecase,
    FindOneProductUsecase,
    {
      provide: ProductProtocol,
      useClass: TypeORMProductRepository
    }
  ],
})
export class ProductModule {}
