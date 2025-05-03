import { Injectable } from "@nestjs/common";
import { StockProtocol } from "src/app/domain/stock/protocol/stock.protocol";

@Injectable()
export class ListStockUsecase {

    constructor(
        private readonly protocol: StockProtocol
    ){}

    async execute(){

        return await this.protocol.getAll();

    }

}
