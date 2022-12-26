import { Inject, Injectable } from '@nestjs/common';
import { DatabaseRepository } from '../../../application/repository/Database.repository';
import { ProductSchema } from '../../models/product/Product';

@Injectable()
export class ProductUseCases {
  constructor(
    @Inject('DatabaseRepository')
    private readonly databaseRepository: DatabaseRepository<ProductSchema>,
  ) {}

  public async findAllProducts(): Promise<ProductSchema[]> {
    try {
      return await this.databaseRepository.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findProductById(productId: string): Promise<ProductSchema> {
    try {
      return await this.databaseRepository.findById(productId);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async createProduct(product: ProductSchema): Promise<ProductSchema> {
    try {
      return await this.databaseRepository.create(product);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async updateProductById(
    id: string,
    product: ProductSchema,
  ): Promise<ProductSchema> {
    try {
      return await this.databaseRepository.updateById(id, product);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async deleteProductById(id: string): Promise<ProductSchema> {
    try {
      return await this.databaseRepository.deleteById(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
