import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from '../../../domain/models/user/User';
import { AuthHandler } from '../../../infrastructure/entrypoints/rest-controller/auth/auth.handler';
import { AuthUseCases } from '../../../domain/useCases/auth/auth.usecases';
import { AuthMongodbAdapter } from '../../../infrastructure/driven-adapters/mongoDB/auth/auth.mongodb.adapter';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from '../../jwt/constants/jwt.constants';
import { JwtStrategy } from '../../jwt/strategy/jwt.strategy';

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
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: JwtConstants.secret,
        signOptions: { expiresIn: '3d' },
      }),
    }),
  ],
  controllers: [AuthHandler],
  providers: [
    AuthUseCases,
    JwtStrategy,
    {
      provide: 'DatabaseRepository',
      useClass: AuthMongodbAdapter,
    },
  ],
  exports: [AuthUseCases, JwtStrategy],
})
export class AuthModule {}
