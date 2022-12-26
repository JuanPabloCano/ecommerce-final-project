import {
  DatabaseRepository,
  Query,
} from '../../../../application/repository/Database.repository';
import { UserDocument, UserSchema } from '../../../../domain/models/user/User';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class AuthMongodbAdapter implements DatabaseRepository<UserDocument> {
  constructor(
    @InjectModel('user') private readonly user: Model<UserDocument>,
  ) {}

  async create(
    data: Partial<UserDocument>,
    query?: Query,
  ): Promise<UserDocument> {
    try {
      return await this.user.create(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(data: Query): Promise<UserDocument> {
    try {
      const { email } = data;
      return this.user.findOne({ email }).select('-__v');
    } catch (error) {
      throw new Error(error);
    }
  }
}
