import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserSchema & Document;

@Schema()
export class UserSchema {
  @Prop({ required: true })
  readonly name: string;

  @Prop({ required: true, unique: true })
  readonly email: string;

  @Prop()
  readonly password: string;
}

export const User = SchemaFactory.createForClass(UserSchema);
