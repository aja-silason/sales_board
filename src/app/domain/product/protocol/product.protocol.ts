import { UpdateProductDto } from "../dto/update-product.dto";
import { ProductEntity } from "../entities/product.entity";
import { ProductModel } from "../model/product.model";

export abstract class ProductProtocol {

    abstract getAll(): Promise<ProductModel[]>;
    abstract create(body: ProductEntity): Promise<void>;
    abstract findOne(): Promise< ProductModel | null | any>;
    abstract update(id: string, newBody: UpdateProductDto): Promise<void>;
    abstract delete(id: string): Promise<void>;

}