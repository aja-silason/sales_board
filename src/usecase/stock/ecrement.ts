import { Injectable } from "@nestjs/common";
import { EncreaseDescreaseStockDto } from "src/app/domain/stock/dto/encrease-decrease-stock.dto";
import { StockProtocol } from "src/app/domain/stock/protocol/stock.protocol";

@Injectable()
export class EcrementStockUsecase{
    
    constructor(
        private readonly protocol: StockProtocol
    ){}

    async execute(id: string, encreaseQuantity: EncreaseDescreaseStockDto){
        
        await this.protocol.encrement(id, encreaseQuantity?.quantity);

    }

}
