import Test from './test';
import Wechat from './wechat';
declare module 'egg' {
  export interface IService {
    test: Test;
    wechat: Wechat;
  }
}
