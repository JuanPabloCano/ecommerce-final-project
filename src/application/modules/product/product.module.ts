import { Module } from '@nestjs/common';
import { ProductHandler } from '../../../infrastructure/entrypoints/rest-controller/product/product.handler';
import { ProductUseCases } from '../../../domain/useCases/product/product.usecases';
import { ProductMongodbAdapter } from '../../../infrastructure/driven-adapters/mongoDB/product/product.mongodb.adapter';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from '../../../domain/models/product/Product';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forFeature([
      {
        name: 'products',
        schema: Product,
      },
    ]),
  ],
  controllers: [ProductHandler],
  providers: [
    ProductUseCases,
    {
      provide: 'DatabaseRepository',
      useClass: ProductMongodbAdapter,
    },
  ],
  exports: [ProductUseCases],
})
export class ProductModule {}
