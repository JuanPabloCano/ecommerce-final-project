import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ShoppingCartUseCases } from '../../../../domain/useCases/shoppingCart/shoppingCart.usecases';
import { ShoppingCartSchema } from '../../../../domain/models/shoppingCart/ShoppingCart';
import { CustomError } from '../../utils/exceptions/CustomError';

@Controller({ path: '/api/shoppingCart' })
export class ShoppingCartHandler {
  constructor(private readonly shoppingCartUseCase: ShoppingCartUseCases) {
  }

  @Post()
  public async createShoppingCart(@Body() shoppingCart: ShoppingCartSchema): Promise<ShoppingCartSchema> {
    try {
      return await this.shoppingCartUseCase.createShoppingCart(shoppingCart);
    } catch (error) {
      throw new CustomError('Bad request', HttpStatus.BAD_REQUEST);
    }
  }

  @Patch('/:id')
  public async addProductToShoppingCart(@Param('id') id: string, @Body() shoppingCart: ShoppingCartSchema): Promise<ShoppingCartSchema> {
    try {
      return await this.shoppingCartUseCase.addProductToShoppingCart(id, shoppingCart);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  public async findAllShoppingCarts(): Promise<ShoppingCartSchema[]> {
    try {
      return await this.shoppingCartUseCase.findAllShoppingCarts();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get('/:id')
  public async findShoppingCartById(@Param('id') id: string): Promise<ShoppingCartSchema> {
    try {
      return await this.shoppingCartUseCase.findShoppingCartById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete('/:id')
  public async deleteShoppingCartById(@Param('id') id: string): Promise<ShoppingCartSchema> {
    try {
      return await this.shoppingCartUseCase.deleteShoppingCartById(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}