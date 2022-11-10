import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = ProductSchema & Document

@Schema()
export class ProductSchema {

  @Prop({ default: Date.now() })
  readonly timestamp: Date;

  @Prop({ type: String, required: true, trim: true })
  readonly name: string;

  @Prop({ type: String, required: true, trim: true })
  readonly description: string;

  @Prop({ type: Number, required: true, default: 0 })
  readonly code: number;

  @Prop({ type: String, required: true, trim: true })
  readonly picture: string;

  @Prop({ type: Number, required: true, default: 0 })
  readonly price: number;

  @Prop({ type: Number, required: true, default: 0 })
  readonly stock: number;
}

export const Product = SchemaFactory.createForClass(ProductSchema);