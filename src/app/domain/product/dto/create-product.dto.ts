import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateProductDto {

    @ApiProperty()
    id?: string;
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    product: string;
    
    @IsNotEmpty()
    @IsPositive()
    @ApiProperty()
    @IsNumber()
    price: number;
}
