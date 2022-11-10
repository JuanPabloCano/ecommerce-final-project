import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from '../../../domain/models/user/User';

@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forFeature([ {
      name: 'user',
      schema: User,
    },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class UserModule {
}