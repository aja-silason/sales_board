import { ConflictException, NotFoundException } from "@nestjs/common";
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

        const existProduct = await this.respository.findOne({where: {product: body.allProducts.product}});

        if(existProduct) throw new ConflictException("Product is already exist"); 

        const aProduct = await this.respository.create(body.allProducts);

        await this.respository.save(aProduct);

    } 

    async findOne(id: string): Promise<ProductModel | null | any> {
        const aProduct = await this.respository.findOne({where: {id: id}})
        
        if(!aProduct) throw new NotFoundException("Product not found");

        return aProduct;
    }
    
    async update(id: string, newBody: UpdateProductDto): Promise<void> {

        const aProduct = await this.respository.findOne({where: {id: id}})

        if(!aProduct) throw new NotFoundException("Product not found");

        aProduct.updatedAt = new Date();

        this.respository.merge(aProduct, newBody);

        await this.respository.save(aProduct);

    }

    async delete(id: string): Promise<void> {

        await this.findOne(id);

        await this.respository.delete(id);

    }



}
