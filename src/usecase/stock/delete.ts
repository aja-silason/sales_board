import { Injectable } from "@nestjs/common";
import { StockProtocol } from "src/app/domain/stock/protocol/stock.protocol";

@Injectable()
export class DeleteStockUsecase {

    constructor(
        private readonly protocol: StockProtocol
    ){}

    async execute(id: string){

        await this.protocol.delete(id);

    }

}
