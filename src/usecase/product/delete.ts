import { Injectable } from "@nestjs/common";
import { ProductProtocol } from "src/app/domain/product/protocol/product.protocol";

@Injectable()
export class DeleteProductUsecase {

    constructor(
        private readonly protocol: ProductProtocol
    ){}

    async execute(id: string){

        await this.protocol.delete(id);

    }

}
