import { BadRequestException } from "@nestjs/common";
import { CreateEmployeeDto } from "../dto/create-employee.dto";

export type employeeProps = {
    id?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    identificaion: string;
}

export class EmployeeEntity {

    constructor(private props: employeeProps){}

    public static create(props: employeeProps, id?: string){

        this.validate(props);

        return new EmployeeEntity({
            id: crypto.randomUUID(),
            dateOfBirth: props.dateOfBirth,
            firstName: props.firstName,
            identificaion: props.identificaion,
            lastName: props.lastName,
        })

    }

    private static validate(props: employeeProps){

        const isValidate: Array<keyof employeeProps> = ["firstName", "lastName", "identificaion", "dateOfBirth"];
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
