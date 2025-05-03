import { InjectRepository } from "@nestjs/typeorm";
import { UpdateProductDto } from "src/app/domain/product/dto/update-product.dto";
import { ProductEntity } from "src/app/domain/product/entities/product.entity";
import { ProductModel } from "src/app/domain/product/model/product.model";
import { ProductProtocol } from "src/app/domain/product/protocol/product.protocol";
import { Repository } from "typeorm";

export class TypeORMProductRepository implements ProductProtocol {

    constructor(
        @InjectRepository(ProductModel)
        private readonly respository: Repository<ProductModel>
    ){}

    async getAll(): Promise<ProductModel[]> {
        return this.respository.find();
    }
    async create(body: ProductEntity): Promise<void> {
    } 
    async findOne(id: string): Promise<ProductModel | null | any> {
        return await this.respository.findOne({where: {id: id}})
    }
    
    async update(id: string, newBody: UpdateProductDto): Promise<void> {
    }

    async delete(id: string): Promise<void> {
    }



}
