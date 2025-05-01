enum ROLE {
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

    public static async create(props: RoleProps){
        return new RoleEntity({
            id: crypto.randomUUID(),
            ...props
        });
    }

    public get getAllProps(){
        return this.props;
    }

}
