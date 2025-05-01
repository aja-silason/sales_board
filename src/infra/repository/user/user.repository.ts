import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/app/domain/user/dto/create-user.dto";
import { UpdateUserDto } from "src/app/domain/user/dto/update-user.dto";
import { UserEntity } from "src/app/domain/user/entities/user.entity";
import { UserModel } from "src/app/domain/user/model/user.model";
import { UserProtocol } from "src/app/domain/user/protocol/user.protocol";
import { Repository } from "typeorm";

@Injectable()
export class TypeORMUserRepository implements UserProtocol {

    constructor(
        @InjectRepository(UserModel)
        private readonly userRepo: Repository<UserModel>
    ) {}

    async create(user: UserEntity): Promise<void> {

        const existUser = await this.userRepo?.findOne({where: {email: user.allProps.email}});

        if(existUser) throw new ConflictException(`E-mail ${existUser.email} is already exists`);
        
        const aUser = this.userRepo.create(user.allProps);
        const a = await this.userRepo.save(aUser);
        
    }

    async findAll(): Promise<any[]> {
        
        return await this.userRepo?.find();
    }

    async findOne(id: string): Promise<UserEntity | null | any> {
        const aUser = await this.userRepo.findOne({where: {id: id}});

        if(!aUser) throw new NotFoundException("User not found in the system");

        return aUser;
    }

    async update(id: string, user: UpdateUserDto): Promise<void> {
        const aUser = await this.userRepo.findOne({where: {id: id}});

        if(!aUser) throw new NotFoundException("User not found in the system");
        
        aUser.updatedAt = new Date();

        this.userRepo.merge(aUser, user);

        await this.userRepo.save(aUser);
    }

    async delete(id: string): Promise<void> {
        
        await this.findOne(id);
        await this.userRepo.delete(id);

    }

}