import { HttpException, Injectable } from '@nestjs/common';
import { CreateStockDto } from '../../../app/domain/stock/dto/create-stock.dto';
import { UpdateStockDto } from '../../../app/domain/stock/dto/update-stock.dto';
import { CreateStockUsecase } from 'src/usecase/stock/create';
import { ListStockUsecase } from 'src/usecase/stock/list';
import { FindOneStockUsecase } from 'src/usecase/stock/findOne';
import { UpdateStockUsecase } from 'src/usecase/stock/update';
import { DeleteStockUsecase } from 'src/usecase/stock/delete';
import { DecrementStockUsecase } from 'src/usecase/stock/decrement';
import { EncreaseDescreaseStockDto } from 'src/app/domain/stock/dto/encrease-decrease-stock.dto'; 
import { EcrementStockUsecase } from 'src/usecase/stock/ecrement';

@Injectable()
export class StockService {

  constructor(
    private readonly createStockUsecase: CreateStockUsecase,
    private readonly listStockUsecase: ListStockUsecase,
    private readonly findOneStockUsecase: FindOneStockUsecase,
    private readonly updateStockUsecase: UpdateStockUsecase,
    private readonly deleteStockUsecase: DeleteStockUsecase,
    private readonly decrementStockUsecase: DecrementStockUsecase,
    private readonly ecrementStockUsecase: EcrementStockUsecase
  ){}

  async create(body: CreateStockDto) {
    try {
      
      return await this.createStockUsecase.execute(body)
      
    } catch (error) {
      throw new HttpException(error?.message, error.statusCode);
    }
  }

  async findAll() {
    try {
      
      return await this.listStockUsecase.execute();
      
    } catch (error) {
      throw new HttpException(error?.message, error.statusCode);
    }
  }

  async findOne(id: string) {
    try {
      
      return await this.findOneStockUsecase.execute(id);
      
    } catch (error) {
      throw new HttpException(error?.message, error.statusCode);
    }
  }

  async update(id: string, newBody: UpdateStockDto) {
    try {
      
      return await this.updateStockUsecase.execute(id, newBody);
      
    } catch (error) {
      throw new HttpException(error?.message, error.statusCode);
    }
  }

  async remove(id: string) {
    try {
      
      return await this.deleteStockUsecase.execute(id);
      
    } catch (error) {
      throw new HttpException(error?.message, error.statusCode);
    }
  }

  async decrement(id: string, value: EncreaseDescreaseStockDto) {
    try {
      
      return await this.decrementStockUsecase.execute(id, value);

    } catch (error) {
      throw new HttpException(error?.message, error.statusCode);
    }
  }

  async ecrement(id: string, value: EncreaseDescreaseStockDto) {
    try {
      
      return await this.ecrementStockUsecase.execute(id, value);

    } catch (error) {
      throw new HttpException(error?.message, error.statusCode);
    }
  }



}
