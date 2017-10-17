import { Application } from 'egg';
import { Document, Model, Schema } from 'mongoose';
import { IUserBase, schemaUserBase } from '../common/model';

export interface IStarring extends Document {
  /**
   * 点赞的者
   */
  stargazerId: string;
  /**
   * 点赞者的信息
   */
  stargazer: IUserBase;
  /**
   * 被赞者
   */
  starredId: string;
  /**
   * 被赞者的信息
   */
  starred: IUserBase;
  /**
   * 创建时间
   */
  createAt: Date;
}

/**
 * 点赞模型
 */
export default (app: Application): Model<IStarring> => {
  const mongoose = app.mongoose;

  const starringSchema = new mongoose.Schema({
    stargazerId: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    stargazer: schemaUserBase,
    starredId: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    starred: schemaUserBase,
    createAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  });
  return mongoose.model<IStarring>('Starring', starringSchema);
};
