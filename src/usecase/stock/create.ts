import { Injectable } from "@nestjs/common";
import { CreateStockDto } from "src/app/domain/stock/dto/create-stock.dto";
import { StockEntity } from "src/app/domain/stock/entities/stock.entity";
import { StockProtocol } from "src/app/domain/stock/protocol/stock.protocol";

@Injectable()
export class CreateStockUsecase {

    constructor(
        private readonly protocol: StockProtocol
    ){}

    async execute(body: CreateStockDto) {
        
        const astock = StockEntity.create(body)

        await this.protocol.create(astock);

    }

}
