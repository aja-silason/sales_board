import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ProductModel {

    @PrimaryColumn({type: 'varchar'})
    id?: string;

    @Column({type: 'varchar'})
    product: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    price: string;

}
