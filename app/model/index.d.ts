import { IUser } from './user';
import { Mongoose } from 'mongoose';
declare module 'egg' {
  export interface Context {
    model: {
      User: IUser,
    };
  }
}
