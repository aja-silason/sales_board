import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { ProductModel } from "../../product/model/product.model";

@Entity({name: 'stock'})
export class StockModel {

    @PrimaryColumn({type: 'varchar'})
    id: string;

    @Column({type: 'int'})
    quantity: number;

    @OneToOne(() => ProductModel, product => product.stock, {eager: true})
    @JoinColumn({name: 'productId'})
    product: ProductModel;

    @Column({name: 'created_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({name: 'updated_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

}