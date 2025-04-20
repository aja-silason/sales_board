import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    id: string;

    @IsString()
    userName?: string;

    @IsString()
    firstName: string;
    
    @IsString()
    lastName: string;
    
    @IsString()
    password: string;
    
    @IsString()
    @IsEmail()
    email: string;

}
