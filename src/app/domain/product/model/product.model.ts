import { decimalTransformer } from "src/util/decimalTranformer";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ProductModel {

    @PrimaryColumn({type: 'varchar'})
    id?: string;

    @Column({type: 'varchar'})
    product: string;

    @Column('decimal', {precision: 10, scale: 2, transformer: decimalTransformer})
    //@Column({type: 'decimal', precision: 10, scale: 2})
    //@Column({type: 'int'})
    price: number;

    @Column({name: 'created_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
    
    @Column({name: 'updated_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;


}
