import { IUser } from './user';
import { Mongoose, Model } from 'mongoose';
declare module 'egg' {
  export interface Context {
    model: {
      User: Model<IUser>,
    };
  }
}
