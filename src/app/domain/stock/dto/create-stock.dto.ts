import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive, IsString } from "class-validator";

export class CreateStockDto {
    
    @ApiProperty()
    id?: string;

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    quantity: number;

    @ApiProperty()
    @IsString()
    productId: string;
}
