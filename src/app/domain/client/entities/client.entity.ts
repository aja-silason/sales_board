import { BadRequestException } from "@nestjs/common";

export type ClientProps = {
    id?: string;
    clientCode: number;
    firstName: string;
    lastName: string;
    telephone: string;
    address?: string;
}

export class ClientEntity {

    constructor(private readonly props: ClientProps){}

    public static create(props: ClientProps){

        this.validate(props);

        props.id = crypto?.randomUUID();
        return new ClientEntity({
            ...props
        })

    }

    private static validate(props: ClientProps){

        const isValidate: Array<keyof ClientProps> = ["firstName", "telephone"];

        for(const key of isValidate){
            const value = props[key];
            if(value === undefined || value == null){
                throw new BadRequestException(`${key} must be provided`);
            }
        }

    }

    private static generateClientCode(){

        const firstValue = new Date();
        //const 

    }

    public get allProps(){
        return this.allProps;
    }

}
