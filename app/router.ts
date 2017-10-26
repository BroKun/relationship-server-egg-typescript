import { Application } from 'egg';

module.exports = (app: Application) => {
  /**
   * tokens
   * POST /tokens
   */
  app.post('token_create', '/api/v1/tokens', 'tokens.create');
  /**
   * users
   * POST /users
   * GET /users/:userid
   * PUT /users/:userid
   * GET /users{?page,per_page,order,sort}
   */
  app.post('user_create', '/api/v1/users', 'users.create');
  app.get('user_show', '/api/v1/users/:id', 'users.show');
  app.put('user_update', '/api/v1/users/:id', 'users.update');
  app.get('user_index', '/api/v1/users', 'users.index');
  /**
   * teaching
   * POST /users/teaching/:userid
   * DELETE /users/teaching/:userid
   * GET /user/:master/teaching/:apprentices
   */
  app.post('teaching_create', '/api/v1/users/teaching/:id', 'teaching.create');
  app.delete('teaching_delete', '/api/v1/users/teaching/:id', 'teaching.destroy');
  app.get('teaching_check', '/users/:master/teaching/:apprentices', 'teaching.check');

  /**
   * starring
   * POST /users/starred/:userid
   * DELETE /users/starred/:userid
   * GET /user/:userid/starred/:otheruser
   * GET /user/:userid/starred?{page,per_page,order,sort}
   * GET /user/:userid/stargazers?{page,per_page,order,sort}
   */
  app.post('starred_create', '/user/starred/:id', 'starring.create');
  app.delete('starred_delete', '/user/starred/:id', 'starring.destroy');
  app.get('starred_check', '/users/:stargazer/starred/:starred', 'starring.check');
  app.get('starred_index', '/users/:id/starred?{page,per_page,order,sort}', 'starring.show');
  app.get('stargazers', '/users/:id/stargazers?{page,per_page,order,sort}', 'starring.stargazers');

  /**
   * apprentices
   * GET /user/:userid/apprentices
   */
  app.get('apprentices_index', '/users/:id/apprentices', 'apprentices.index');
  /**
   * masters
   * GET /user/:userid/masters
   */
  app.get('masters_index', '/users/:id/masters', 'masters.index');
};
