import { Injectable } from "@nestjs/common";
import { UpdateStockDto } from "src/app/domain/stock/dto/update-stock.dto";
import { StockProtocol } from "src/app/domain/stock/protocol/stock.protocol";

@Injectable()
export class UpdateStockUsecase{
    
    constructor(
        private readonly protocol: StockProtocol
    ){}

    async execute(id: string, newBody: UpdateStockDto){
        
        await this.protocol.update(id, newBody);

    }

}
