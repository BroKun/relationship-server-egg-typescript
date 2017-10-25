import { Mongoose, Model, Document } from 'mongoose';
declare module 'egg' {
  export interface Context {
    model: {
      User: Model<Relationship.User & Document>,
      Starring: Model<Relationship.Starring & Document>,
    };
  }
}
