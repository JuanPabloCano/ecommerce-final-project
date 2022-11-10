import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserSchema{
}

export const User = SchemaFactory.createForClass(UserSchema);