import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from '../../../domain/models/product/Product';
import { ShoppingCart } from '../../../domain/models/shoppingCart/ShoppingCart';
import { User } from '../../../domain/models/user/User';
import { AuthMongodbAdapter } from '../../../infrastructure/driven-adapters/mongoDB/auth/auth.mongodb.adapter';
import { ProductMongodbAdapter } from '../../../infrastructure/driven-adapters/mongoDB/product/product.mongodb.adapter';
import {
  ShoppingCartMongodbAdapter
} from '../../../infrastructure/driven-adapters/mongoDB/shoppingCart/shoppingCart.mongodb.adapter';
import { KEY } from '../../shared/constants/Key';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forFeature([
      { name: KEY.PRODUCT, schema: Product, },
      { name: KEY.USER, schema: User, },
      { name: KEY.SHOPPING_CART, schema: ShoppingCart, }
    ]),
  ],
  providers: [
    { provide: KEY.DATABASE_REPOSITORY, useClass: ProductMongodbAdapter },
    { provide: KEY.DATABASE_REPOSITORY, useClass: AuthMongodbAdapter, },
    { provide: KEY.DATABASE_REPOSITORY, useClass: ShoppingCartMongodbAdapter, }
  ],
  exports: [ KEY.DATABASE_REPOSITORY ]
})
export class RepositoryModule {
}
