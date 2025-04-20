import { BadRequestException } from "@nestjs/common";

export type UserProps = {
    id?: string;
    userName?: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
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

}
