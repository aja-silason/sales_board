import { BadRequestException, ConflictException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductModel } from "src/app/domain/product/model/product.model";
import { UpdateStockDto } from "src/app/domain/stock/dto/update-stock.dto";
import { StockEntity } from "src/app/domain/stock/entities/stock.entity";
import { StockModel } from "src/app/domain/stock/model/stock.model";
import { StockProtocol } from "src/app/domain/stock/protocol/stock.protocol";
import { Repository } from "typeorm";

export class TypeORMStockRepository implements StockProtocol {

    constructor(
        @InjectRepository(StockModel)
        private readonly repository: Repository<StockModel>,

        @InjectRepository(ProductModel)
        private readonly productRepository: Repository<ProductModel>,
    ){}

    async create(body: StockEntity): Promise<void> {

        const product = await this.productRepository.findOne({where: {id: body.allProps.productId}})

        const existStockProduct = await this.repository.findOne({
            where: { product: { id: body.allProps.productId } },
            relations: ['product']
        })

        if(existStockProduct) throw new ConflictException("Product is already in the stock");

        //const aStock = this.repository.create({
        //    ...body.allProps,
        //    product: {...product}
        //})
        
        //await this.repository.save(aStock);

    }

    async getAll(): Promise<StockModel[]> {
        return await this.repository.find()
    }

    async findOne(id: string): Promise<StockModel | null | any> {
        const aStock = await this.repository.findOne({where: {id: id}});

        if(!aStock) throw new NotFoundException("Product not found");

        return aStock;
    }

    async update(id: string, newBody: UpdateStockDto): Promise<void> {

        const aStock = await this.repository.findOne({where: {id: id}});

        if(!aStock) throw new NotFoundException("Product not found");

        aStock.updatedAt = new Date();

        this.repository.merge(aStock, newBody);

        await this.repository.save(aStock);

    }

    async delete(id: string): Promise<void> {
        
        await this.findOne(id);

        await this.repository.delete(id);

    }

    async decrement(id: string, value: number){
        
        const aStock = await this.repository.findOne({where: {id: id}});

        if(!aStock) throw new NotFoundException("Product not found in the stock");

        if(aStock?.quantity > value){
            await this.repository.decrement({id}, 'quantity', value);
        } else {
            throw new BadRequestException("Quantity is unsuficient");
        }

    }

    async encrement(id: string, value: number){
        
        const aStock = await this.repository.findOne({where: {id: id}});

        if(!aStock) throw new NotFoundException("Product not found in the stock");

        aStock.quantity += value;
        aStock.updatedAt = new Date();

        await this.repository.save(aStock);

    }

}