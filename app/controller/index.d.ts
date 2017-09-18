import home from './home';
import test from './test';
import user from './user';
import token from './token';

declare module 'egg' {
  export interface IController {
    test,
    user,
    token,
  }
}
