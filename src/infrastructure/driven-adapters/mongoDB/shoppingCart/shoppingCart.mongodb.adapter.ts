import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DatabaseRepository, ID, Query, } from '../../../../application/repository/Database.repository';
import { ShoppingCartDocument } from '../../../../domain/models/shoppingCart/ShoppingCart';

export class ShoppingCartMongodbAdapter
  implements DatabaseRepository<ShoppingCartDocument> {
  constructor(
    @InjectModel('shoppingCart')
    private readonly shoppingCart: Model<ShoppingCartDocument>,
  ) {
  }

  async create(
    data: Partial<ShoppingCartDocument>,
    query?: Query,
  ): Promise<ShoppingCartDocument> {
    try {
      return await this.shoppingCart.create(data);
    } catch ( error ) {
      throw new Error(error);
    }
  }

  async deleteById(id: ID, query?: Query): Promise<ShoppingCartDocument> {
    try {
      return this.shoppingCart.findByIdAndRemove(id);
    } catch ( error ) {
      throw new Error(error);
    }
  }

  async findAll(query?: Query): Promise<ShoppingCartDocument[]> {
    try {
      return this.shoppingCart
        .find({})
        .populate({
          path: 'product',
          select: 'name description code price stock',
        })
        .select('-__v');
    } catch ( error ) {
      throw new Error(error);
    }
  }

  async findById(id: ID, query?: Query): Promise<ShoppingCartDocument> {
    try {
      return this.shoppingCart
        .findById(id)
        .populate({
          path: 'product',
          select: 'name description code price stock',
        })
        .select('-__v');
    } catch ( error ) {
      throw new Error(error);
    }
  }

  async updateById(
    id: ID,
    data: ShoppingCartDocument,
    query?: Query,
  ): Promise<ShoppingCartDocument> {
    try {
      return this.shoppingCart
        .findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          {
            new: true,
          },
        )
        .select('-__v');
    } catch ( error ) {
      throw new Error(error);
    }
  }
}
