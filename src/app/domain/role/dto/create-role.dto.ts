import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsIn(['administrator', 'manager', 'agent'])
    role: string;
}
