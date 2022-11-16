import {
  DatabaseRepository,
  Query,
} from '../../../../application/repository/MongoDB.repository';
import { UserSchema } from '../../../../domain/models/user/User';

export class AuthMongodbAdapter implements DatabaseRepository<UserSchema> {
  create(data: Partial<UserSchema>, query?: Query): Promise<UserSchema> {
    return Promise.resolve(undefined);
  }

  findOne(query?: Query): Promise<UserSchema> {
    return Promise.resolve(undefined);
  }
}
