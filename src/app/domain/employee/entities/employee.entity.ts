import { BadRequestException } from "@nestjs/common";

export type employeeProps = {
    id?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    identification: string;
}

export class EmployeeEntity {

    public constructor(private readonly props: employeeProps){}

    public static create(props: employeeProps, id?: string){
        this.validate(props);

        props.id = crypto.randomUUID();
        return new EmployeeEntity({
            ...props
        })

    }

    private static validate(props: employeeProps){

        const isValidate: Array<keyof employeeProps> = ["firstName", "lastName", "identification", "dateOfBirth"];
        for(const key of isValidate){
            const value = props[key];
            if(value == undefined || value == null){
                throw new BadRequestException(`${key} must be provide`);
            }
        }

    }

    public get allProps(){
        return this.props;
    }

}
