import { Injectable } from "@nestjs/common";
import { EncreaseDescreaseStockDto } from "src/app/domain/stock/dto/encrease-decrease-stock.dto";
import { StockProtocol } from "src/app/domain/stock/protocol/stock.protocol";

@Injectable()
export class DecrementStockUsecase{
    
    constructor(
        private readonly protocol: StockProtocol
    ){}

    async execute(id: string, reduceQuantity: EncreaseDescreaseStockDto){
        
        await this.protocol.decrement(id, reduceQuantity?.quantity);

    }

}
