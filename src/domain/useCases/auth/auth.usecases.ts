import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { DatabaseRepository } from '../../../application/repository/MongoDB.repository';
import { UserSchema } from '../../models/user/User';
import { Register } from '../../models/auth/Register';
import { Login } from '../../models/auth/Login';
import { compare, hash } from 'bcrypt';

@Injectable()
export class AuthUseCases {

  constructor(@Inject('DatabaseRepository') private readonly databaseRepository: DatabaseRepository<UserSchema>) {
  }

  public async registerUser(userBody: Register): Promise<Register> {
    try {

      const { password, ...user } = userBody;

      const userParsed = {
        ...user,
        password: await hash(password, 10),
      };

      return await this.databaseRepository.create(userParsed);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async login(user: Login): Promise<Login> {
    try {
      const { password, email } = user;
      const isUserExist = await this.databaseRepository.findOne({ email });

      if (!isUserExist) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

      const isChecked = await compare(password, isUserExist.password);

      if (!isChecked) throw new HttpException('PASSWORD_INVALID', HttpStatus.FORBIDDEN);

      return isUserExist;
    } catch (error) {
      throw new Error(error);
    }
  }
}