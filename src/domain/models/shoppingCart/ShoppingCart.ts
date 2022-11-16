import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ProductSchema } from '../product/Product';
import { Document, Types } from 'mongoose';

export type ShoppingCartDocument = ShoppingCartSchema & Document;

@Schema()
export class ShoppingCartSchema {
  @Prop({ default: Date.now })
  readonly timestamp: Date;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'products' }] })
  readonly product: ProductSchema[];
}

export const ShoppingCart = SchemaFactory.createForClass(ShoppingCartSchema);
