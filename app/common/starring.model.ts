import { Document } from 'mongoose';

export interface IStarring extends Document {
  /**
   * 点赞的者
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
