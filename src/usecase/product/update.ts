import { Injectable } from "@nestjs/common";
import { UpdateProductDto } from "src/app/domain/product/dto/update-product.dto";
import { ProductProtocol } from "src/app/domain/product/protocol/product.protocol";

@Injectable()
export class UpdateProductUsecase{
    
    constructor(
        private readonly protocol: ProductProtocol
    ){}

    async execute(id: string, newBody: UpdateProductDto){
        
        await this.protocol.update(id, newBody);

    }

}
