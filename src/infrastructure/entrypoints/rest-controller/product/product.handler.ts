import { ProductUseCases } from '../../../../domain/useCases/product/product.usecases';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Post()
  public async createProduct(@Body() product: ProductSchema): Promise<ProductSchema> {
    try {
      return await this.productUseCases.createProduct(product);
    } catch (error) {
      console.log(error);
    }
  }

  @Patch('/:id')
  public async updateProductById(@Param('id') id: string, @Body() product: ProductSchema): Promise<ProductSchema> {
    try {
      return await this.productUseCases.updateProductById(id, product);
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('/:id')
  public async deleteProductById(@Param('id') id: string): Promise<ProductSchema> {
    try {
      return await this.productUseCases.deleteProductById(id);
    } catch (error) {
      console.log(error);
    }
  }
}