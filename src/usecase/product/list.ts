import { Injectable } from "@nestjs/common";
import { ProductProtocol } from "src/app/domain/product/protocol/product.protocol";

@Injectable()
export class ListProductUsecase {

    constructor(
        private readonly protocol: ProductProtocol
    ){}

    async execute(){

        return await this.protocol.getAll();

    }

}
