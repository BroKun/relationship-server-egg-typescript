import { Application } from 'egg';
import { Model, Schema } from 'mongoose';
import { IUserBase, schemaUserBase } from '../common/model';

export interface IUser extends IUserBase {
  /**
   * 入学年份
   */
  enrollmentYear?: number;
  /**
   * 专业
   */
  major?: string;
  /**
   * 签名
   */
  bio?: string;
  /**
   * 正式成员
   */
  member: boolean;
  /**
   * 师傅
   */
  masters?: IUserBase;
  /**
   * 徒弟
   */
  apprentices?: [IUserBase];
  /**
   * 创建时间
   */
  createAt: Date;
  /**
   * 修改时间
   */
  updateAt: Date;
}

/**
 * 用户模型
 */
export default (app: Application): Model<IUser> => {
  const mongoose = app.mongoose;

  const userSchema = new mongoose.Schema({
    openId: {
      type: Schema.Types.String,
      required: true,
      index: true,
    },
    unioId: {
      type: Schema.Types.String,
      required: false,
    },
    realName: {
      type: Schema.Types.String,
      required: false,
    },
    nickName: {
      type: Schema.Types.String,
      required: true,
      index: true,
    },
    avatar: {
      type: Schema.Types.String,
      required: false,
    },
    enrollmentYear: {
      type: Schema.Types.Number,
      required: false,
    },
    major: {
      type: Schema.Types.String,
      required: false,
    },
    bio: {
      type: Schema.Types.String,
      required: false,
    },
    member: {
      type: Schema.Types.String,
      required: true,
      default: false,
    },
    masters: {
      type: Schema.Types.ObjectId,
      required: false,
    },
    apprentices: [schemaUserBase],
    createAt: {
      type: Schema.Types.Date,
      required: true,
      default: Date.now,
    },
    updateAt: {
      type: Schema.Types.Date,
      required: true,
      default: Date.now,
    },
  });
  userSchema.pre('save', function (next) {
    const now = new Date();
    this.updateAt = now;
    next();
  });
  return mongoose.model<IUser>('User', userSchema);
};
