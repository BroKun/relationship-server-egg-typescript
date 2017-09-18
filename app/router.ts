import { Application } from 'egg';

module.exports = (app: Application) => {
  app.resources('token','/api/token', 'token');
  app.resources('user', '/api/user', 'user');
  app.resources('test', '/api/test', 'test');
};
