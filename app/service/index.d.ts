import Wechat from './wechat';
declare module 'egg' {
  export interface IService {
    wechat: Wechat;
  }
}
