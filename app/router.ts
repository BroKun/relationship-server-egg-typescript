import { Application } from 'egg';

module.exports = (app: Application) => {

  /**
   * teaching
   */
  app.post('teaching_create', '/api/v1/api/v1/user/teaching/:id', 'teaching.create');
  app.delete('teaching_delete', '/api/v1/api/v1/user/teaching/:id', 'teaching.destroy');
  app.get('teaching_check', '/api/v1/users/:master/teaching/:apprentices', 'teaching.check');

  /**
   * starring
   */
  app.post('starred_create', '/api/v1/user/starred/:id', 'starring.create');
  app.delete('starred_delete', '/api/v1/user/starred/:id', 'starring.destroy');
  app.get('starred_check', '/api/v1/users/:stargazer/starred/:starred', 'starring.check');
  app.get('starred_show', '/api/v1/users/:id/starred', 'starring.show');
  app.get('stargazers_show', '/api/v1/users/:id/stargazers', 'starring.stargazers');

  /**
   * apprentices
   */
  app.get('apprentices_index', '/api/v1/users/:id/apprentices', 'apprentices.index');
  /**
   * masters
   * GET /user/:userid/masters
   */
  app.get('masters_index', '/api/v1/users/:id/masters', 'masters.index');

  /**
   * users
   */
  app.post('user_create', '/api/v1/users', 'users.create');
  app.get('user_show', '/api/v1/users/:id', 'users.show');
  app.put('user_update', '/api/v1/users/:id', 'users.update');
  app.get('user_index', '/api/v1/users', 'users.index');
  /**
   * tokens
   */
  app.post('token_create', '/api/v1/tokens', 'tokens.create');
};
