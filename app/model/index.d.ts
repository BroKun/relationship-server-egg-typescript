import { IUser } from '../common/user.model';
import { IStarring } from '../common/starring.model';
import { Mongoose, Model } from 'mongoose';
declare module 'egg' {
  export interface Context {
    model: {
      User: Model<IUser>,
      Starring: Model<IStarring>,
    };
  }
}
