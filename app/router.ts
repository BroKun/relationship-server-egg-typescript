import { Application } from 'egg';

module.exports = (app: Application) => {
  app.get('/api/user/token', app.controller.user.token);
  app.resources('user', '/api/user', 'user');
  app.resources('test', '/api/test', 'test');
};
