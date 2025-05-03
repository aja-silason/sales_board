import { BadRequestException } from "@nestjs/common";

export type RoleProps = {
    id?: string;
    role: string
}

export class RoleEntity {

    constructor(private readonly props: RoleProps){}

    public static create(props: RoleProps, id?: string){

        this.validate(props);
        
        props.id = crypto.randomUUID();
        return new RoleEntity({
            ...props
        })

    }

    private static validate(props: RoleProps){

        const isValidate: Array<keyof RoleProps> = ["role"];
        for(const key of isValidate){
            const value = props[key];
            if(value == undefined || value == null || value?.trim() == ""){
                throw new BadRequestException(`${key} must be provided`);
            }
        }

    }

    public get allProps(){
        return this.props;
    }

}
