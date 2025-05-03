import { BadRequestException } from "@nestjs/common";

export type StockProps = {
    id?: string;
    quantity: number;
    productId: string;
}

export class StockEntity {

    constructor(private readonly props: StockProps){}

    public static create(props: StockProps){

        this.validate(props);

        props.id = crypto.randomUUID();
        return new StockEntity({
            ...props
        })

    }

    private static validate(props: StockProps){

        const isValidate: Array<keyof StockProps> = ["quantity", "productId"];
        for(const key of isValidate){
            const value = props[key];
            if(value === undefined || value === null){
                throw new BadRequestException(`${key} must be provided`);
            }
        }

    }

    public get allProps() {
        return this.props;
    }

}
