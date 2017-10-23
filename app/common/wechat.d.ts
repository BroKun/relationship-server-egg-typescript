
declare namespace WX {
  interface Session {
    /**
     * 微信平台openId
     */
    openid: string;
    session_key: string;
    unionid: string;
  }
  /**
   * 小程序API定义的错误信息格式
   */
  interface Error {
    errcode: number;
    errmsg: string;
  }
  interface RawData {
    nickName: string;
    gender: number;
    language: string;
    city: string;
    province: string;
    country: string;
    avatarUrl: string;
  }
  interface EncryptData {
    openId: string;
    nickName: string;
    gender: number;
    city: string;
    province: string;
    country: string;
    avatarUrl: string;
    unionId: string;
  }
}
