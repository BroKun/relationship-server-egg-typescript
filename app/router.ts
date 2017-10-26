import { Application } from 'egg';

module.exports = (app: Application) => {
  /**
   * tokens
   * POST /tokens
   */
  app.resources('tokens', '/api/v1/tokens', 'tokens');
  /**
   * users
   * POST /users
   * GET /users/:userid
   * PUT /users/:userid
   * GET /users{?page,per_page,order,sort}
   */
  app.resources('users', '/api/v1/users', 'users');
  /**
   * teaching
   * POST /users/teaching/:userid
   * DELETE /users/teaching/:userid
   * GET /user/:master/teaching/:apprentices
   */
  app.post('teaching_create', '/api/v1/users/teaching/:id/', 'teaching.create');
  app.delete('teaching_delete', '/api/v1/users/teaching/:id/', 'teaching.destroy');
  app.get('teaching_check', '/user/:master/teaching/:apprentices', 'teaching.check');

  /**
   * starring
   * POST /users/starred/:userid
   * DELETE /users/starred/:userid
   * GET /user/:userid/starred/:otheruser
   * GET /user/:userid/starred?{page,per_page,order,sort}
   * GET /user/:userid/stargazers?{page,per_page,order,sort}
   */
  app.post('starred_create', '/users/starred/:id', 'starring.create');
  app.delete('starred_delete', '/users/starred/:id', 'starring.destroy');
  app.get('starred_check', '/user/:stargazer/starred/:starred', 'starring.check');
  app.get('starred_index', '/user/:id/starred?{page,per_page,order,sort}', 'starring.show');
  app.get('stargazers', '/user/:id/stargazers?{page,per_page,order,sort}', 'starring.stargazers');

  /**
   * apprentices
   * GET /user/:userid/apprentices
   */
  app.get('apprentices_index', '/user/:id/apprentices', 'apprentices.index');
  /**
   * masters
   * GET /user/:userid/masters
   */
  app.get('masters_index', '/user/:id/masters', 'masters.index');
};
