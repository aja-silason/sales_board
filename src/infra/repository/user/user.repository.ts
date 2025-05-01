import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RoleModel } from "src/app/domain/role/model/role.model";
import { UpdateUserDto } from "src/app/domain/user/dto/update-user.dto";
import { UserEntity } from "src/app/domain/user/entities/user.entity";
import { UserModel } from "src/app/domain/user/model/user.model";
import { UserProtocol } from "src/app/domain/user/protocol/user.protocol";
import { Repository } from "typeorm";

@Injectable()
export class TypeORMuserRepositorysitory implements UserProtocol {

    constructor(
        @InjectRepository(UserModel)
        private readonly userRepository: Repository<UserModel>,

        @InjectRepository(RoleModel)
        private readonly roleRepository: Repository<RoleModel>,
    ) {}

    async create(user: UserEntity): Promise<void> {

        
        const existUser = await this.userRepository?.findOne({where: {email: user?.allProps?.email}});
        
        if(existUser) throw new ConflictException(`E-mail ${existUser.email} is already exists`);

        const role = await this.roleRepository.findOne({where: {id: user?.allProps?.roleId}});        

        const aUser = this?.userRepository?.create({
            ...user?.allProps,
            role: {...role}
        });


        await this.userRepository.save(aUser);
        
    }

    async findAll(): Promise<UserModel[]> {
        
        return await this.userRepository?.find();
    }

    async findOne(id: string): Promise<UserModel | null | any> {
        const aUser = await this.userRepository.findOne({where: {id: id}});

        if(!aUser) throw new NotFoundException("User not found in the system");

        return aUser;
    }

    async update(id: string, user: UpdateUserDto): Promise<void> {
        const aUser = await this.userRepository.findOne({where: {id: id}});

        if(!aUser) throw new NotFoundException("User not found in the system");
        
        aUser.updatedAt = new Date();

        this.userRepository.merge(aUser, user);

        await this.userRepository.save(aUser);
    }

    async delete(id: string): Promise<void> {
        
        await this.findOne(id);
        await this.userRepository.delete(id);

    }

}