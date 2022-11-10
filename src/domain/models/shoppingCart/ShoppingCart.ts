import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ShoppingCartSchema {

  @Prop({ default: Date.now })
  private timestamp: Date;

}

export const ShoppingCart = SchemaFactory.createForClass(ShoppingCartSchema);