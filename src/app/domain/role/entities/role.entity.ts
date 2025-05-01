export type RoleProps = {
    id?: string;
    role: string
}

export class RoleEntity {

    constructor(private readonly props: RoleProps){}

    public static create(props: RoleProps, id?: string){
        
        return new RoleEntity({
            id: crypto.randomUUID(),
            role: props.role
        })

    }

    public get allProps(){
        return this.props;
    }

}
