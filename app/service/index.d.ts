import test from './test';
import user from './user';
import wechat from './wechat';
declare module 'egg' {
  export interface IService {
    test: test;
    wechat: wechat;
  }
}
