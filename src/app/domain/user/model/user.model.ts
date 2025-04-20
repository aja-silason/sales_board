import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "user"})
export class UserModel {

    @PrimaryColumn({type: 'uuid'})
    id: string;

    @Column({nullable: true})
    userName?: string;
    
    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    password: string;
    
    @Column()    
    email: string;

    @Column({name: 'created_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({name: 'updated_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date

}