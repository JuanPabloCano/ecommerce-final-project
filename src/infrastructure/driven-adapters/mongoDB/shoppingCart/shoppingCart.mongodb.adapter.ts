import {
  DatabaseRepository,
  ID,
  Query,
} from '../../../../application/repository/Database.repository';
import { ShoppingCartSchema } from '../../../../domain/models/shoppingCart/ShoppingCart';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class ShoppingCartMongodbAdapter
  implements DatabaseRepository<ShoppingCartSchema>
{
  constructor(
    @InjectModel('shoppingCart')
    private readonly shoppingCart: Model<ShoppingCartSchema>,
  ) {}

  async create(
    data: Partial<ShoppingCartSchema>,
    query?: Query,
  ): Promise<ShoppingCartSchema> {
    try {
      return await this.shoppingCart.create(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteById(id: ID, query?: Query): Promise<ShoppingCartSchema> {
    try {
      return this.shoppingCart.findByIdAndRemove(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(query?: Query): Promise<ShoppingCartSchema[]> {
    try {
      return this.shoppingCart
        .find({})
        .populate({
          path: 'product',
          select: 'name description code price stock',
        })
        .select('-__v');
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id: ID, query?: Query): Promise<ShoppingCartSchema> {
    try {
      return this.shoppingCart
        .findById(id)
        .populate({
          path: 'product',
          select: 'name description code price stock',
        })
        .select('-__v');
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateById(
    id: ID,
    data: ShoppingCartSchema,
    query?: Query,
  ): Promise<ShoppingCartSchema> {
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
    } catch (error) {
      throw new Error(error);
    }
  }
}
