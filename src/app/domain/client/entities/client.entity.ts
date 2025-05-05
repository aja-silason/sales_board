import { BadRequestException } from "@nestjs/common";
import { GenerateClientCode } from "./generate-client-code";

export type ClientProps = {
    id?: string;
    clientCode: string;
    firstName: string;
    lastName: string;
    telephone: string;
    address?: string;
}

export class ClientEntity {

    constructor(private readonly props: ClientProps){}

    public static create(props: ClientProps){

        this.validate(props);

        const clientCode = GenerateClientCode.create(props.telephone);

        props.id = crypto?.randomUUID();
        props.clientCode = clientCode;
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

    public get allProps(){
        return this.allProps;
    }

}
