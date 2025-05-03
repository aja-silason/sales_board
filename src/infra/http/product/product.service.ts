import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../../app/domain/product/dto/create-product.dto';
import { UpdateProductDto } from '../../../app/domain/product/dto/update-product.dto';
import { CreateProductUsecase } from 'src/usecase/product/create';
import { ListProductUsecase } from 'src/usecase/product/list';
import { UpdateProductUsecase } from 'src/usecase/product/update';
import { DeleteProductUsecase } from 'src/usecase/product/delete';
import { FindOneProductUsecase } from 'src/usecase/product/findOne';

@Injectable()
export class ProductService {

  constructor(
    private readonly createProductUsecase: CreateProductUsecase,
    private readonly listProductUsecase: ListProductUsecase,
    private readonly findOneProductUsecase: FindOneProductUsecase,
    private readonly updateProductUsecase: UpdateProductUsecase,
    private readonly delteProductUsecase: DeleteProductUsecase
  ){}

  async create(body: CreateProductDto) {
    return await this.createProductUsecase.execute(body);
  }

  async findAll() {
    return await this.listProductUsecase.execute();
  }

  async findOne(id: string) {
    return await this.findOneProductUsecase.execute(id);
  }

  async update(id: string, newBody: UpdateProductDto) {
    return await this.updateProductUsecase.execute(id, newBody);
  }

  async remove(id: string) {
    return await this.delteProductUsecase.execute(id);
  }
}
