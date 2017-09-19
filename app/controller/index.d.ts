import Test from './test';
import User from './user';
import Token from './token';

declare module 'egg' {
  export interface IController {
    test: Test,
    user: User,
    token: Token,
  }
}
