import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from '../../../domain/models/user/User';
import { AuthUseCases } from '../../../domain/useCases/auth/auth.usecases';
import { AuthHandler } from '../../../infrastructure/entrypoints/rest-controller/auth/auth.handler';
import { KEY } from '../../shared/constants/Key';
import { JwtStrategy } from '../../jwt/strategy/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: KEY.USER, schema: User, },
    ]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: KEY.SECRET,
        signOptions: { expiresIn: '3d' },
      }),
    }),
  ],
  controllers: [ AuthHandler ],
  providers: [ AuthUseCases, JwtStrategy, ],
  exports: [ AuthUseCases, JwtStrategy ],
})
export class AuthModule {
}
