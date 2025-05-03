import { HttpException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateEmployeeDto } from "src/app/domain/employee/dto/update-employee.dto";
import { EmployeeEntity } from "src/app/domain/employee/entities/employee.entity";
import { EmployeeModel } from "src/app/domain/employee/model/employee.model";
import { EmployeeProtocol } from "src/app/domain/employee/protocol/employee.protocol";
import { Repository } from "typeorm";

export class TypeORMEmployeeRepository implements EmployeeProtocol {

    constructor(
        @InjectRepository(EmployeeModel)
        private readonly repository: Repository<EmployeeModel>
    ){}

    async findAll(): Promise<EmployeeModel[]> {
        return await this.repository.find();
    }

    async create(body: EmployeeEntity): Promise<void> {

        const aEmplyee = this.repository.create(body.allProps);
        
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