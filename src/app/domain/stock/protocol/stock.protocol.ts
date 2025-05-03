import { UpdateStockDto } from "../dto/update-stock.dto";
import { StockEntity } from "../entities/stock.entity";
import { StockModel } from "../model/stock.model";

export abstract class StockProtocol {

    abstract getAll(): Promise<StockModel[]>;
    abstract create(body: StockEntity): Promise<void>;
    abstract findOne(id: string): Promise< StockModel | null | any>;
    abstract update(id: string, newBody: UpdateStockDto): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract decrement(id: string, value: number): Promise<void>;
    abstract encrement(id: string, value: number): Promise<void>;

}