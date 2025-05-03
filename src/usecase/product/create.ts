import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "src/app/domain/product/dto/create-product.dto";
import { ProductEntity } from "src/app/domain/product/entities/product.entity";
import { ProductProtocol } from "src/app/domain/product/protocol/product.protocol";

@Injectable()
export class CreateProductUsecase {

    constructor(
        private readonly protocol: ProductProtocol
    ){}

    async execute(body: CreateProductDto) {
        
        const aProduct = ProductEntity.create(body)

        await this.protocol.create(aProduct);

    }

}
