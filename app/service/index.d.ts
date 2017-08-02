import test from './test';
declare module 'egg' {
  export interface IService {
    test: test;
  }
}
