import { Document } from 'mongoose';

export interface IUserBase extends Document {
  /**
   * 用户Id
   */
  _id: string;
  /**
   * openId,来自微信
   */
  openId: string;
}

export interface IUser extends IUserBase {
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
  nickName?: string;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 入学年份
   */
  enrollmentYear?: number;
  /**
   * 性别
   * 0：未知、1：男、2：女
   */
  gender?: number;
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
  masters?: string;
  /**
   * 徒弟
   */
  apprentices?: [{
    /**
     * 徒弟的id
     */
    _id: string;
    /**
     * 是否是正式的徒弟
     */
    state?: boolean;
  }];
  /**
   * 创建时间
   */
  createAt?: Date;
  /**
   * 修改时间
   */
  updateAt?: Date;
}
