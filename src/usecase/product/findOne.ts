import { Injectable } from "@nestjs/common";
import { ProductProtocol } from "src/app/domain/product/protocol/product.protocol";

@Injectable()
export class FindOneProductUsecase {

    constructor(
        private readonly protocol: ProductProtocol
    ){}

    async execute(id: string){

        return await this.protocol.findOne(id);

    }

}
