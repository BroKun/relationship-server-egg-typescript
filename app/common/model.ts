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
  unioId?: string;
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
export const schemaUserBase = {
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true,
  },
  openId: {
    type: String,
    required: true,
    index: true,
  },
  unioId: {
    type: String,
    required: false,
  },
  realName: {
    type: String,
    required: false,
  },
  nickName: {
    type: String,
    required: true,
    index: true,
  },
  avatar: {
    type: String,
    required: false,
  },
};
