import { Mongoose, Model, Document } from 'mongoose';
declare module 'egg' {
  export interface IModel {
    User: Model<Relationship.User & Document> & Relationship.ModelStatic,
    Starring: Model<Relationship.Starring & Document> & Relationship.ModelStatic,
  }
}
