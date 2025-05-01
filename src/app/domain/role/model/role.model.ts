import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { UserModel } from "../../user/model/user.model";

@Entity({name: 'role'})
export class RoleModel {

    @PrimaryColumn({type: 'varchar'})
    id: string;

    @Column({type: 'varchar', length: 20})
    role: string;

    @OneToMany(() => UserModel, user => user.role)
    users?: UserModel[];

    @Column({name: 'created_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({name: 'updated_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

}