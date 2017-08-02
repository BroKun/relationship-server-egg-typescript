import test from './test';
import home from './home';
declare module 'egg' {
  export interface IController {
    test: test;
    home: home;
  }
}
