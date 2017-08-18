import { Application } from 'egg';

module.exports = (app: Application) => {
  app.get('user/token', app.controller.user.token);
  app.resources('test', '/api/v1/test', 'test');
};
