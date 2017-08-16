import { Application } from 'egg';

module.exports = (app: Application) => {
  app.get('wx/login', app.controller.user.login);
  app.resources('test', '/api/v1/test', 'test');
};
