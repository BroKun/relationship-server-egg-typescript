import { IUser } from './users.model';

export class Token {
  userInfo: IUser;
  /**
   * 用户Id
   */
  _id: string;
  /**
   * 有效期至
   */
  exp?: number;
  /**
   * 开始生效
   */
  nbf?: number;
  /**
   * 生成时间
   */
  iat?: number;
  /**
   * 接受者
   */
  aud?: string;
  /**
   * 主题
   */
  sub?: string;
  /**
   * 来源
   */
  iss?: string;
  constructor(user: IUser, exp?: number, nbf?: number, iat?: number, aud?: string, sub?: string, iss?: string) {
    this.userInfo = user;
    this._id = user._id;
    if (exp) {
      this.exp = exp;
    }
    if (nbf) {
      this.nbf = nbf;
    }
    if (iat) {
      this.iat = iat;
    }
    if (aud) {
      this.aud = aud;
    }
    if (sub) {
      this.sub = sub;
    }
    if (iss) {
      this.iss = iss;
    }
  }
}
