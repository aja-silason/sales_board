import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'client'})
export class ClientModel {

    @PrimaryColumn({type: 'varchar'})
    id: string;
    
    @Column({name: 'client_code', type: 'varchar'})
    clientCode: string;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    telephone: string;
    
    @Column({nullable: true})
    address: string;

    @Column({name: 'created_at', nullable: true, type: 'timestamp' ,default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({name: 'updated_at', nullable: true, type: 'timestamp' ,default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

}