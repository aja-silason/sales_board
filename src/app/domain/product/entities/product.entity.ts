import { BadRequestException } from "@nestjs/common";

export type ProductProps = {
    id?: string;
    product: string;
    price: number;
}

export class ProductEntity {

    public constructor(private readonly props: ProductProps){}

    public static create(props: ProductProps){

        this.validate(props);

        props.id = crypto.randomUUID();
        return new ProductEntity({
            ...props
        })
    }

    private static validate(props: ProductProps){
        const isValidate: Array<keyof ProductProps> = ["product", "price"];
        
        for(const key of isValidate){
            const value = props[key];  
            if(value == undefined || value == null ){
                throw new BadRequestException(`${key} must be provided`);
            }
        }
    }

}
