import { Document, Schema } from 'mongoose';

export interface IUserBase extends Document {
  /**
   * 用户Id
   */
  _id: string;
  /**
   * openId,来自微信
   */
  openId: string;
  /**
   * unionId,来自微信
   */
  unionId?: string;
  /**
   * 真实姓名
   */
  realName?: string;
  /**
   * 昵称
   */
  nickName: string;
  /**
   * 头像
   */
  avatar: string;
}

export const userBaseSchema = {
  _id: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  openId: { type: Schema.Types.String, required: true, index: true },
  unionId: { type: Schema.Types.String, required: false },
  realName: { type: Schema.Types.String, required: false },
  nickName: { type: Schema.Types.String, required: true, index: true },
  avatar: { type: Schema.Types.String, required: false },
};

export interface IUser extends IUserBase {
  /**
   * 入学年份
   */
  enrollmentYear?: number;
  /**
   * 性别
   * 0：未知、1：男、2：女
   */
  gender: number;
  /**
   * 专业
   */
  major?: string;
  /**
   * 签名
   */
  bio?: string;
  /**
   * 成员类型
   * 0: 游客 1：正式成员 10：超管
   */
  type: number;
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
  createAt?: Date;
  /**
   * 修改时间
   */
  updateAt?: Date;
}
