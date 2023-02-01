import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from '../middlewares/logger/logger.middleware';
import { AuthModule } from './auth/auth.module';
import { RepositoryModule } from './database/repository.module';
import { ProductModule } from './product/product.module';
import { ShoppingCartModule } from './shoppingCart/shoppingCart.module';

@Module({
  imports: [
    ProductModule,
    AuthModule,
    ShoppingCartModule,
    RepositoryModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
