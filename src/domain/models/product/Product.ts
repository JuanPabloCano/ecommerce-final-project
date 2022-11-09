import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = ProductSchema & Document

@Schema()
export class ProductSchema {

  @Prop({ default: Date.now() })
  private timestamp: Date;

  @Prop({ type: String, required: true, trim: true })
  private name: string;

  @Prop({ type: String, required: true, trim: true })
  private description: string;

  @Prop({ type: Number, required: true, default: 0 })
  private code: number;

  @Prop({ type: String, required: true, trim: true })
  private picture: string;

  @Prop({ type: Number, required: true, default: 0 })
  private price: number;

  @Prop({ type: Number, required: true, default: 0 })
  private stock: number;
}

export const Product = SchemaFactory.createForClass(ProductSchema);