import { Injectable, NotFoundException } from "@nestjs/common";
import { ProductProtocol } from "src/app/domain/product/protocol/product.protocol";
import { CreateStockDto } from "src/app/domain/stock/dto/create-stock.dto";
import { StockEntity, StockProps } from "src/app/domain/stock/entities/stock.entity";
import { StockProtocol } from "src/app/domain/stock/protocol/stock.protocol";

@Injectable()
export class CreateStockUsecase {

    constructor(
        private readonly protocol: StockProtocol,
        private readonly productProtocol: ProductProtocol,
    ){}

    async execute(body: CreateStockDto) {
        
        const astock = StockEntity.create(body);

        const existProduct = await this.productProtocol.findOne(body?.productId);

        if(!existProduct) throw new NotFoundException("Product not found");

        await this.protocol.create(astock);

    }

}
