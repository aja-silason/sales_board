import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateClientDto {

    @ApiProperty()
    id?: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    firstName: string;
    
    @IsString()
    @ApiProperty()
    lastName: string;

    clientCode: string;
    
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    telephone: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    address?: string;

}
