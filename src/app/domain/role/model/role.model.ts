import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'role'})
export class RoleModel {

    @PrimaryColumn({type: 'uuid'})
    id: string;

    @Column({type: 'varchar', length: 20})
    role: string;

    @Column({name:'created_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({name: 'updated_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

}
