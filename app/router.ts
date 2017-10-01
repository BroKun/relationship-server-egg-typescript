import { Application } from 'egg';

module.exports = (app: Application) => {
  app.resources('tokens', '/api/tokens', 'tokens');
  app.resources('users', '/api/users', 'users');
  app.resources('test', '/api/test', 'test');
};
