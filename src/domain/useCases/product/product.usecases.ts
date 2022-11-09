import { Inject, Injectable } from '@nestjs/common';
import { DatabaseRepository } from '../../../application/repository/MongoDB.repository';
import { ProductSchema } from '../../models/product/Product';

@Injectable()
export class ProductUseCases {

  constructor(@Inject('DatabaseRepository') private readonly databaseRepository: DatabaseRepository<ProductSchema>) {
  }

  public async findAllProducts(): Promise<ProductSchema[]> {
    try {
      return await this.databaseRepository.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  public async findProductById(productId: string): Promise<ProductSchema> {
    try {
      return await this.databaseRepository.findById(productId);
    } catch (error) {
      console.log(error);
    }
  }
}