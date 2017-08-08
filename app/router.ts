'use strict';
import { Application } from 'egg';

module.exports = (app: Application) => {
  app.get('/', 'home.index');
  app.resources('test', '/api/v1/test', 'test');
};
