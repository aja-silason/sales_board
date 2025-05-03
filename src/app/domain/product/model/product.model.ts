import { decimalTransformer } from "src/util/decimalTranformer";
import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { StockModel } from "../../stock/model/stock.model";

@Entity()
export class ProductModel {

    @PrimaryColumn({type: 'varchar'})
    id?: string;

    @Column({type: 'varchar'})
    product: string;

    @Column('decimal', {precision: 10, scale: 2, transformer: decimalTransformer})
    price: number;

    @OneToOne(() => StockModel, stock => stock.product)
    stock: StockModel;

    @Column({name: 'created_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
    
    @Column({name: 'updated_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;


}
