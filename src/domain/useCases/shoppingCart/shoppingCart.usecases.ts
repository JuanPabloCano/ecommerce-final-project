import { Inject, Injectable } from '@nestjs/common';
import { DatabaseRepository } from '../../../application/repository/Database.repository';
import { KEY } from '../../../application/shared/enums/Key';
import { ShoppingCartSchema } from '../../models/shoppingCart/ShoppingCart';

@Injectable()
export class ShoppingCartUseCases {
  constructor(
    @Inject(KEY.SHOPPING_CART_REPOSITORY)
    private readonly databaseRepository: DatabaseRepository<ShoppingCartSchema>,
  ) {
  }

  public async createShoppingCart(
    shoppingCart: ShoppingCartSchema,
  ): Promise<ShoppingCartSchema> {
    try {
      return await this.databaseRepository.create(shoppingCart);
    } catch ( error ) {
      throw new Error(error);
    }
  }

  public async addProductToShoppingCart(
    id: string,
    data: ShoppingCartSchema,
  ): Promise<ShoppingCartSchema> {
    try {
      return await this.databaseRepository.updateById(id, data);
    } catch ( error ) {
      throw new Error(error);
    }
  }

  public async findAllShoppingCarts(): Promise<ShoppingCartSchema[]> {
    try {
      return await this.databaseRepository.findAll();
    } catch ( error ) {
      throw new Error(error);
    }
  }

  public async findShoppingCartById(id: string): Promise<ShoppingCartSchema> {
    try {
      return await this.databaseRepository.findById(id);
    } catch ( error ) {
      throw new Error(error);
    }
  }

  public async deleteShoppingCartById(id: string): Promise<ShoppingCartSchema> {
    try {
      return await this.databaseRepository.deleteById(id);
    } catch ( error ) {
      throw new Error(error);
    }
  }
}
