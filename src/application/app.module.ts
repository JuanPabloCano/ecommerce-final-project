import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from '../domain/models/product/Product';
import { ProductUseCases } from '../domain/useCases/product/product.usecases';
import { ProductMongodbAdapter } from '../infrastructure/driven-adapters/mongoDb/product/product.mongodb.adapter';
import { ProductHandler } from '../infrastructure/entrypoints/rest-controller/product/product.handler';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forFeature([ {
      name: 'products',
      schema: Product,
    } ]),
  ],
  controllers: [ ProductHandler ],
  providers: [ ProductUseCases, {
    provide: 'DatabaseRepository',
    useClass: ProductMongodbAdapter,
  } ],
})
export class AppModule {
}
