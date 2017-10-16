import { Application } from 'egg';
import { Document, Model } from 'mongoose';

/**
 * 关联用户模型
 */
interface IRelationUser {
  /**
   * openId,来自微信
   */
  openId: string;
  /**
   * 真实姓名
   */
  realName: string;
  /**
   * 昵称
   */
  nickName: string;
  /**
   * 关系生效的时间
   */
  relationTime: Date;
}

/**
 * 关联用户模型
 */
const relationUser = {
  type: {
    openId: {
      type: String,
      required: true,
    },
    realName: {
      type: String,
      required: true,
    },
    nickName: {
      type: String,
      required: true,
    },
    relationTime: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  required: false,
};
export interface IUser extends Document {
  /**
   * openId,来自微信
   */
  openId: string;
  /**
   * unionId,来自微信
   */
  unioId?: string;
  /**
   * 真实姓名
   */
  realName: string;
  /**
   * 昵称
   */
  nickName: string;
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
   * 头像
   */
  avatar?: string;
  /**
   * 正式成员
   */
  member: boolean;
  /**
   * 师傅
   */
  masters?: IRelationUser;
  /**
   * 徒弟
   */
  apprentices?: [IRelationUser];
  /**
   * 赞过的谁
   */
  starred?: [IRelationUser];
  /**
   * 被谁赞过
   */
  stargazers?: [IRelationUser];
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
      type: String,
      required: true,
      index: true,
    },
    unioId: {
      type: String,
      required: false,
      index: true,
    },
    realName: {
      type: String,
      required: true,
      index: true,
    },
    nickName: {
      type: String,
      required: true,
      index: true,
    },
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
    avatar: {
      type: String,
      required: false,
    },
    member: {
      type: Boolean,
      required: true,
      default: false,
    },
    masters: relationUser,
    apprentices: [relationUser],
    starred: [relationUser],
    stargazers: [relationUser],
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
