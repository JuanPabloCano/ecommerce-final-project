import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DatabaseRepository, ID, Query, } from '../../../../application/repository/Database.repository';
import { KEY } from '../../../../application/shared/constants/Key';
import { ProductDocument } from '../../../../domain/models/product/Product';

export class ProductMongodbAdapter
  implements DatabaseRepository<ProductDocument> {
  constructor(
    @InjectModel(KEY.PRODUCT) private readonly product: Model<ProductDocument>,
  ) {
  }

  async create(
    data: Partial<ProductDocument>,
    query?: Query,
  ): Promise<ProductDocument> {
    try {
      return await this.product.create(data);
    } catch ( error ) {
      throw new Error(error);
    }
  }

  async deleteById(id: ID, query?: Query): Promise<ProductDocument> {
    try {
      return this.product.findByIdAndRemove(id);
    } catch ( error ) {
      throw new Error(error);
    }
  }

  async findAll(query?: Query): Promise<ProductDocument[]> {
    try {
      return this.product.find({}).select('-__v');
    } catch ( error ) {
      throw new Error(error);
    }
  }

  async findById(id: ID, query?: Query): Promise<ProductDocument> {
    try {
      return this.product.findById(id).select('-__v');
    } catch ( error ) {
      throw new Error(error);
    }
  }

  async updateById(
    id: ID,
    data: ProductDocument,
    query?: Query,
  ): Promise<ProductDocument> {
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
    } catch ( error ) {
      throw new Error(error);
    }
  }
}
