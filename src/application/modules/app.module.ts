import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ShoppingCartModule } from './shoppingCart/shoppingCart.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
    UserModule,
    ShoppingCartModule,
  ],
})
export class AppModule {
}
