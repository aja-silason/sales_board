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

        this.generateClientCode(props);

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

    private static generateClientCode(props: ClientProps){

        const secondTimeDate = new Date();
        const telephoneNumber = props.telephone.split('');
        const ArraytreTelephoneNumber: Array<any> = [];

        console.log("Data", new Date())
        console.log("Data second", secondTimeDate.toJSON().split(':')[2].split('.')[0]);

        
        for (let _i: number = telephoneNumber.length - 3; _i < telephoneNumber.length; _i++ ){
            ArraytreTelephoneNumber.push(telephoneNumber[_i])
        }

        const telephone = ArraytreTelephoneNumber.reverse().join('');
        const firstTimeValue = new Date().toJSON().split('.')[1].split('Z')[0]
        const secondTimeValue = new Date().toJSON().split(':')[2].split('.')[0]

        const tamplate = `${telephone}-${firstTimeValue}-${secondTimeValue}`

        return tamplate;

    }

    public get allProps(){
        return this.allProps;
    }

}
