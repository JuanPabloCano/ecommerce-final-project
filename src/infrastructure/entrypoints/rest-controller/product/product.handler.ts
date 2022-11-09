import { ProductUseCases } from '../../../../domain/useCases/product/product.usecases';
import { Controller, Get, Param } from '@nestjs/common';
import { ProductSchema } from '../../../../domain/models/product/Product';

@Controller({ path: '/api/products' })
export class ProductHandler {
  constructor(private readonly productUseCases: ProductUseCases) {
  }

  @Get()
  public async findAllProducts(): Promise<ProductSchema[]> {
    try {
      return await this.productUseCases.findAllProducts();
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/:id')
  public async findProductById(@Param('id') id: string): Promise<ProductSchema> {
    try {
      return await this.productUseCases.findProductById(id);
    } catch (error) {
      console.log(error);
    }
  }

}