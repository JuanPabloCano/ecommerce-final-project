import { ProductUseCases } from '../../../../domain/useCases/product/product.usecases';
import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ProductSchema } from '../../../../domain/models/product/Product';
import { CustomError } from '../../utils/exceptions/CustomError';
import { ProductDTO } from '../../../driven-adapters/mongoDB/product/data/Product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller({ path: '/api/products' })
export class ProductHandler {
  constructor(private readonly productUseCases: ProductUseCases) {
  }

  @Get()
  public async findAllProducts(): Promise<ProductSchema[]> {
    try {
      return await this.productUseCases.findAllProducts();
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('/:id')
  public async findProductById(@Param('id') id: string): Promise<ProductSchema> {
    try {
      return await this.productUseCases.findProductById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Post()
  public async createProduct(@Body() product: ProductDTO): Promise<ProductSchema> {
    try {
      return await this.productUseCases.createProduct(product);
    } catch (error) {
      throw new CustomError('Bad request', HttpStatus.BAD_REQUEST);
    }
  }

  @Patch('/:id')
  public async updateProductById(@Param('id') id: string, @Body() product: ProductDTO): Promise<ProductSchema> {
    try {
      return await this.productUseCases.updateProductById(id, product);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete('/:id')
  public async deleteProductById(@Param('id') id: string): Promise<ProductSchema> {
    try {
      return await this.productUseCases.deleteProductById(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}