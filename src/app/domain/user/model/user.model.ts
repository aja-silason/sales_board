import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { RoleModel } from "../../role/model/role.model";
import { EmployeeModel } from "../../employee/model/employee.model";

@Entity({name: "user"})
export class UserModel {

    @PrimaryColumn({type: 'uuid'})
    id: string;

    @Column({nullable: true})
    userName?: string;
    
    @Column({type: 'varchar'})
    password: string;
    
    @Column({type: 'varchar'})    
    email: string;

    @ManyToOne(() => RoleModel, role => role.users, {eager: true})
    @JoinColumn({name: 'roleId'})
    role: RoleModel;

    @OneToOne(() => EmployeeModel, employee => employee.user)
    employee: EmployeeModel;

    @Column({name: 'created_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
    
    @Column({name: 'updated_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

}