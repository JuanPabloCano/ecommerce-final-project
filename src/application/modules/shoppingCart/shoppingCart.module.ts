import { Module } from '@nestjs/common';
import { ShoppingCartUseCases } from '../../../domain/useCases/shoppingCart/shoppingCart.usecases';
import {
  ShoppingCartHandler,
} from '../../../infrastructure/entrypoints/rest-controller/shoppingCart/shoppingCart.handler';

@Module({
  controllers: [ ShoppingCartHandler ],
  providers: [ ShoppingCartUseCases ],
  exports: [ ShoppingCartUseCases ],
})
export class ShoppingCartModule {
}