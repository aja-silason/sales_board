import { UserProtocol } from "src/app/domain/user/protocol/user.repository";

export class ListUsers {

    constructor(
        private readonly repository: UserProtocol
    ){}

    public async execute(){
        await this.repository.findAll()
    }


}