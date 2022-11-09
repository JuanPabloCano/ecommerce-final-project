import { DatabaseRepository, ID, Query } from '../../../../application/repository/MongoDB.repository';
import { ProductDocument, ProductSchema } from '../../../../domain/models/product/Product';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class ProductMongodbAdapter implements DatabaseRepository<ProductSchema> {

  constructor(@InjectModel('products') private readonly product: Model<ProductDocument>) {
  }

  create(data: Partial<ProductSchema>, query?: Query): Promise<ProductSchema> {
    return Promise.resolve(undefined);
  }

  deleteById(id: ID, query?: Query): Promise<ProductSchema> {
    return Promise.resolve(undefined);
  }

  async findAll(query?: Query): Promise<ProductSchema[]> {
    try {
      return this.product.find({});
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: ID, query?: Query): Promise<ProductSchema> {
    try {
      return this.product.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  updateById(id: ID, data: ProductSchema, query?: Query): Promise<ProductSchema> {
    return Promise.resolve(undefined);
  }

}