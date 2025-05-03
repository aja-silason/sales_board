import { ConflictException, HttpException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateEmployeeDto } from "src/app/domain/employee/dto/update-employee.dto";
import { EmployeeEntity } from "src/app/domain/employee/entities/employee.entity";
import { EmployeeModel } from "src/app/domain/employee/model/employee.model";
import { EmployeeProtocol } from "src/app/domain/employee/protocol/employee.protocol";
import { UserModel } from "src/app/domain/user/model/user.model";
import { Repository } from "typeorm";

export class TypeORMEmployeeRepository implements EmployeeProtocol {

    constructor(
        @InjectRepository(EmployeeModel)
        private readonly repository: Repository<EmployeeModel>,

        @InjectRepository(UserModel)
        private readonly userRepository: Repository<UserModel>
 
    ){}

    async findAll(): Promise<EmployeeModel[]> {
        return await this.repository.find();
    }

    async create(body: EmployeeEntity): Promise<void> {

        const existEmployee = await this.repository.findOne({where: {identification: body.allProps.identification}})

        if(existEmployee) throw new ConflictException("Employee already exist");

        const user = await this.userRepository.findOne({where: {id: body?.allProps?.userId}});

        if(!user) throw new NotFoundException("User not found");

        const aEmplyee = this.repository.create({
            ...body?.allProps,
            user: {...user}
        });
        
        await this.repository.save(aEmplyee);

    }

    async findOne(id: string): Promise<EmployeeModel | null | any> {

        const aEmplyee = await this.repository.findOne({where: {id: id}});

        if(!aEmplyee) throw new NotFoundException("Employee not found");

        return aEmplyee;

    }

    async delete(id: string): Promise<void> {

        await this.findOne(id);
        await this.repository.delete(id);

    }

    async update(id: string, newBody: UpdateEmployeeDto): Promise<void> {

        const aEmplyee = await this.repository.findOne({where: {id: id}});

        if(!aEmplyee) throw new NotFoundException("Employee not found");

        aEmplyee.updatedAt = new Date();

        this.repository.merge(aEmplyee, newBody);

        await this.repository.save(aEmplyee);

    }


}