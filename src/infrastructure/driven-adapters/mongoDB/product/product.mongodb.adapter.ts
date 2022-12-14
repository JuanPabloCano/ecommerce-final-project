import {
  DatabaseRepository,
  ID,
  Query,
} from '../../../../application/repository/Database.repository';
import {
  ProductDocument,
  ProductSchema,
} from '../../../../domain/models/product/Product';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class ProductMongodbAdapter
  implements DatabaseRepository<ProductSchema>
{
  constructor(
    @InjectModel('products') private readonly product: Model<ProductDocument>,
  ) {}

  async create(
    data: Partial<ProductSchema>,
    query?: Query,
  ): Promise<ProductSchema> {
    try {
      return await this.product.create(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteById(id: ID, query?: Query): Promise<ProductSchema> {
    try {
      return this.product.findByIdAndRemove(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(query?: Query): Promise<ProductSchema[]> {
    try {
      return this.product.find({}).select('-__v');
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id: ID, query?: Query): Promise<ProductSchema> {
    try {
      return this.product.findById(id).select('-__v');
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateById(
    id: ID,
    data: ProductSchema,
    query?: Query,
  ): Promise<ProductSchema> {
    try {
      return this.product
        .findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          { new: true },
        )
        .select('-__v');
    } catch (error) {
      throw new Error(error);
    }
  }
}
