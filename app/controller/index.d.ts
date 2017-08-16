import home from './home';
import test from './test';
import user from './user';

declare module 'egg' {
  export interface IController {
    test: test;
    user: user;
  }
}
