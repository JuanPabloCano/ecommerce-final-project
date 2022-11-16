import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from '../../../domain/models/user/User';
import { AuthHandler } from '../../../infrastructure/entrypoints/rest-controller/auth/auth.handler';
import { AuthUseCases } from '../../../domain/useCases/auth/auth.usecases';
import { ProductMongodbAdapter } from '../../../infrastructure/driven-adapters/mongoDB/product/product.mongodb.adapter';
import { AuthMongodbAdapter } from "../../../infrastructure/driven-adapters/mongoDB/auth/auth.mongodb.adapter";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forFeature([
      {
        name: 'user',
        schema: User,
      },
    ]),
  ],
  controllers: [AuthHandler],
  providers: [
    AuthUseCases,
    {
      provide: 'DatabaseRepository',
      useClass: AuthMongodbAdapter,
    },
  ],
  exports: [AuthUseCases],
})
export class AuthModule {}
