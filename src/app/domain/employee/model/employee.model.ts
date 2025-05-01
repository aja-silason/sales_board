import { Column, Entity } from "typeorm";

@Entity({name: 'employee'})
export class EmployeeModel {

    @Column({type: 'varchar'})
    firstName: string;

    @Column({type: 'varchar'})
    lastName: string;

    @Column({type: 'varchar'})
    dateOfBirth: Date;

    @Column({type: 'varchar'})
    identificaion: string;

    @Column({name: 'created_at', type: 'datetime', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({name: 'updated_at', type: 'datetime', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

}
