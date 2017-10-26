
declare namespace WX {
  interface Session {
    /**
     * 微信平台openId
     */
    openid: string;
    /**
     * 用户session_key,有效期由微信服务器控制
     */
    session_key: string;
    /**
     * 联合Id
     * 适用于同一认证主体
     */
    unionid?: string;
  }

  /**
   * 小程序API定义的错误信息格式
   */
  interface Error {
    /**
     * 异常编码
     */
    errcode: number;
    /**
     * 异常信息
     */
    errmsg: string;
  }

  /**
   * 用户基本信息
   */
  interface UserInfo {
    /**
     * 昵称
     */
    nickName: string;
    /**
     * 性别
     * 0：未知、1：男、2：女
     */
    gender: number;
    /**
     * 城市
     */
    city: string;
    /**
     * 省份
     */
    province: string;
    /**
     * 国家
     */
    country: string;
    /**
     * 头像地址
     */
    avatarUrl: string;
  }

  /**
   * 用户加密信息
   */
  interface EncryptData {
    /**
     * 微信平台openId
     */
    openId: string;
    /**
     * 昵称
     */
    nickName: string;
    /**
     * 性别
     * 0：未知、1：男、2：女
     */
    gender: number;
    /**
     * 城市
     */
    city: string;
    /**
     * 省份
     */
    province: string;
    /**
     * 国家
     */
    country: string;
    /**
     * 头像地址
     */
    avatarUrl: string;
    /**
     * 联合id
     */
    unionId: string;
  }
}
