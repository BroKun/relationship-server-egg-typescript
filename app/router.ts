'use strict';
import { Application } from 'egg';

declare module 'egg' {
  export interface Application {
    validator: any;
  }
}
module.exports = (app: Application) => {
  app.get('/', 'home.index');
  app.resources('test', '/api/v1/test', 'test');
};
