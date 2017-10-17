import { Application } from 'egg';
import { Model } from 'mongoose';
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
    ...schemaUserBase,
    enrollmentYear: {
      type: Number,
      required: false,
    },
    major: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
    },
    member: {
      type: Boolean,
      required: true,
      default: false,
    },
    masters: schemaUserBase,
    apprentices: [schemaUserBase],
    createAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    updateAt: {
      type: Date,
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
