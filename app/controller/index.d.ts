import home from './home';
import test from './test';

declare module 'egg' {
  export interface IController {
    test: test;
  }
}
