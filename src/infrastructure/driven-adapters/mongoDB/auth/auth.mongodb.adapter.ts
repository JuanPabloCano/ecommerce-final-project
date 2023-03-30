import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DatabaseRepository, Query, } from '../../../../application/repository/Database.repository';
import { KEY } from '../../../../application/shared/enums/Key';
import { UserDocument } from '../../../../domain/models/user/User';

export class AuthMongodbAdapter implements DatabaseRepository<UserDocument> {
  constructor(
    @InjectModel(KEY.USER) private readonly user: Model<UserDocument>,
  ) {
  }

  async create(
    data: Partial<UserDocument>,
    query?: Query,
  ): Promise<UserDocument> {
    try {
      return await this.user.create(data);
    } catch ( error ) {
      throw new Error(error);
    }
  }

  async findOne(data: Query): Promise<UserDocument> {
    try {
      const { email } = data;
      return this.user.findOne({ email }).select('-__v');
    } catch ( error ) {
      throw new Error(error);
    }
  }
}
