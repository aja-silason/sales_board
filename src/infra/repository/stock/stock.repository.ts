import { InjectRepository } from "@nestjs/typeorm";
import { UpdateStockDto } from "src/app/domain/stock/dto/update-stock.dto";
import { StockEntity } from "src/app/domain/stock/entities/stock.entity";
import { StockModel } from "src/app/domain/stock/model/stock.model";
import { StockProtocol } from "src/app/domain/stock/protocol/stock.protocol";
import { Repository } from "typeorm";

export class TypeORMStockRepository implements StockProtocol {

    constructor(
        @InjectRepository(StockModel)
        private readonly repository: Repository<StockModel>
    ){}

    async create(body: StockEntity): Promise<void> {
    }

    async getAll(): Promise<StockModel[]> {
        return await this.repository.find()
    }

    async findOne(id: string): Promise<StockModel | null | any> {
    }

    async update(id: string, newBody: UpdateStockDto): Promise<void> {
    }

    async delete(id: string): Promise<void> {
    }

}