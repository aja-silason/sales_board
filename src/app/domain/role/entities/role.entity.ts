export enum ROLE {
    IS_ADMIN = 'admin',
    IS_MANAGER = 'manager',
    IS_AGENT = 'agent',
}

export type RoleProps = {
    id?: string;
    role: ROLE
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
