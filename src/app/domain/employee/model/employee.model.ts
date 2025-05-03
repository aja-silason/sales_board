import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { UserModel } from "../../user/model/user.model";

@Entity({name: 'employee'})
export class EmployeeModel {

    @PrimaryColumn({type: 'varchar'})
    id: string;

    @Column({type: 'varchar'})
    firstName: string;

    @Column({type: 'varchar'})
    lastName: string;

    @Column({type: 'varchar'})
    dateOfBirth: Date;

    @Column({type: 'varchar'})
    identification: string;

    @OneToOne(() => UserModel, user => user.employee, {eager: true})
    @JoinColumn({name: "userId"})
    user: UserModel;

    @Column({name: 'created_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({name: 'updated_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

}
