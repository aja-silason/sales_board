import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { RoleModel } from "../../role/model/role.model";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @IsString()
    @ApiProperty()
    userName?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    firstName: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    lastName: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string;
    
    @IsString()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    roleId: string


}
