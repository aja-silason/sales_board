import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive, IsString } from "class-validator";

export class EncreaseDescreaseStockDto {
    
    @ApiProperty()
    @IsNumber()
    @IsPositive()
    quantity: number;

}
