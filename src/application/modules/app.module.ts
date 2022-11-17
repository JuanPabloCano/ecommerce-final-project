import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ShoppingCartModule } from './shoppingCart/shoppingCart.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
    AuthModule,
    ShoppingCartModule,
  ],
})
export class AppModule {}
