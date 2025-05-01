import { BadRequestException } from "@nestjs/common";

export type UserProps = {
    id?: string;
    userName?: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    roleId: string
}

export class UserEntity {

    public constructor(private props: UserProps){}

    public static create(props: UserProps, id?: string){
        this.validate(props);

        return new UserEntity({
            id: crypto.randomUUID(),
            ...props
        })


    }

    private static validate(props: UserProps){

        const isValidate: Array<keyof UserProps> = ["firstName", "lastName", "password", "email"];
        for(const key of isValidate){
            const value = props[key];
            if(value == undefined || value == null ) {
                throw new BadRequestException(` ${key} must be provided`);
            }
        }

    }

    public get allProps(){
        return this.props;
    }

    /* public get id(){
        return this.props.id;
    }

    public get username(){
        return this.props.userName;
    }

    public get firstName(){
        return this.props.firstName;
    }

    public get lastName(){
        return this.props.lastName;
    }

    public get password(){
        return this.props.password;
    }

    public get email(){
        return this.props.email;
    } */

}
