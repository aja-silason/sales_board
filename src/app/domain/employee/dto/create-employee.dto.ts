import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateEmployeeDto {

    @ApiProperty()
    id?: string;

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
    dateOfBirth: Date;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    identification: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    userId: string
}
