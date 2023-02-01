import { Module } from '@nestjs/common';
import { ProductUseCases } from '../../../domain/useCases/product/product.usecases';
import { ProductHandler } from '../../../infrastructure/entrypoints/rest-controller/product/product.handler';

@Module({
  controllers: [ ProductHandler ],
  providers: [ ProductUseCases ],
  exports: [ ProductUseCases ],
})
export class ProductModule {
}
