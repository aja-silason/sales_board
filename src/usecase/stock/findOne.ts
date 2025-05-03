import { Injectable } from "@nestjs/common";
import { StockProtocol } from "src/app/domain/stock/protocol/stock.protocol";

@Injectable()
export class FindOneStockUsecase {

    constructor(
        private readonly protocol: StockProtocol
    ){}

    async execute(id: string){

        return await this.protocol.findOne(id);

    }

}
