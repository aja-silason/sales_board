import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from '../../../app/domain/stock/dto/create-stock.dto';
import { UpdateStockDto } from '../../../app/domain/stock/dto/update-stock.dto';
import { EncreaseDescreaseStockDto } from 'src/app/domain/stock/dto/encrease-decrease-stock.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  create(@Body() createStockDto: CreateStockDto) {
    return this.stockService.create(createStockDto);
  }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stockService.update(id, updateStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(id);
  }

  @Patch('decrease/:id')
  decrement(@Param('id') id: string, @Body() value: EncreaseDescreaseStockDto) {
    return this.stockService.decrement(id, value);
  }

  @Patch('encrease/:id')
  ecrement(@Param('id') id: string, @Body() value: EncreaseDescreaseStockDto) {
    return this.stockService.ecrement(id, value);
  }

}
