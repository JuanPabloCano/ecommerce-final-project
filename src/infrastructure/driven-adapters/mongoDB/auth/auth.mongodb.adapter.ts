import { DatabaseRepository, Query, } from '../../../../application/repository/MongoDB.repository';
import { UserDocument, UserSchema } from '../../../../domain/models/user/User';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class AuthMongodbAdapter implements DatabaseRepository<UserSchema> {
  constructor(
    @InjectModel('user') private readonly user: Model<UserDocument>,
  ) {}

  async create(data: Partial<UserSchema>, query?: Query): Promise<UserSchema> {
    try {
      return await this.user.create(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(data: Query): Promise<UserSchema> {
    try {
      const { email } = data;
      return this.user.findOne({ email }).select('-__v');
    } catch (error) {
      throw new Error(error);
    }
  }
}
