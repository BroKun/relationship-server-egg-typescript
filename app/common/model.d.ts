declare namespace Relationship {
  interface Starring {
    /**
     * 点赞者
     */
    stargazer: string;
    stargazerOpenId: string;
    stargazerRealName: string;
    stargazerNickName: string;
    stargazerAvatar: string;
    /**
     * 被赞者
     */
    starred: string;
    starredOpenId: string;
    starredRealName: string;
    starredNickName: string;
    starredAvatar: string;
    /**
     * 创建时间
     */
    createAt: Date;
  }

  // export type IStarring = Starring & MongoDocument;

  interface ITokenBase {
    /**
     * 生成时间
     */
    iat: number;
    /**
     * 有效期至
     */
    exp?: number;
    /**
     * 开始生效
     */
    nbf?: number;
    /**
     * 接受者
     */
    aud?: string | number;
    /**
     * 主题
     */
    sub?: string | number;
    /**
     * 来源
     */
    iss?: string | number;
  }

  type Token<T> = ITokenBase & T;

  interface User {
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
    nickName?: string;
    /**
     * 位置
     */
    geoPosition?: string;
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
    apprentices?: [string];
    /**
     * 未接纳的徒弟
     */
    unacceptedApprentices?: [string];
    /**
     * 创建时间
     */
    createAt?: Date;
    /**
     * 修改时间
     */
    updateAt?: Date;
  }
  // export type IUser = User & MongoDocument;
}
