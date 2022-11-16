import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoppingCart } from '../../../domain/models/shoppingCart/ShoppingCart';
import {
  ShoppingCartHandler,
} from '../../../infrastructure/entrypoints/rest-controller/shoppingCart/shoppingCart.handler';
import { ShoppingCartUseCases } from '../../../domain/useCases/shoppingCart/shoppingCart.usecases';
import {
  ShoppingCartMongodbAdapter,
} from '../../../infrastructure/driven-adapters/mongoDB/shoppingCart/shoppingCart.mongodb.adapter';


@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forFeature([ {
      name: 'shoppingCart',
      schema: ShoppingCart,
    } ]),
  ],
  controllers: [ ShoppingCartHandler ],
  providers: [ ShoppingCartUseCases, {
    provide: 'DatabaseRepository',
    useClass: ShoppingCartMongodbAdapter,
  } ],
  exports: [ ShoppingCartUseCases ],
})
export class ShoppingCartModule {
}