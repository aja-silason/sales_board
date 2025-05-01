import { BadRequestException } from "@nestjs/common";
import { CreateEmployeeDto } from "../dto/create-employee.dto";

export class EmployeeEntity {

    constructor(private readonly props: CreateEmployeeDto){}

    public static create(props: CreateEmployeeDto){

        this.validate(props);

        return new EmployeeEntity({
            id: crypto.randomUUID(),
            ...props
        })

    }

    private static validate(props: CreateEmployeeDto){

        const isValidate: Array<keyof CreateEmployeeDto> = ["firstName", "lastName", "identificaion", "dateOfBirth"];
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
