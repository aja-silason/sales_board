import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    @ApiProperty()
    id?: string;
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    product: string;
    
    @IsNotEmpty()
    @IsPositive()
    @ApiProperty()
    @IsDecimal({decimal_digits: '2'})
    price: number;
}
