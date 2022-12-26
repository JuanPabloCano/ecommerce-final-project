import { ProductSchema } from '../../../../../domain/models/product/Product';
import { ApiProperty } from '@nestjs/swagger';

export class ShoppingCartDTO {
  @ApiProperty()
  readonly timestamp: Date;

  @ApiProperty()
  readonly product: ProductSchema[];
}
