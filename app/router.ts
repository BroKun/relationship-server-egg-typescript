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
  app.post('teaching_create', '/api/v1/users/teaching/:userid', 'teaching.create');
  app.delete('teaching_delete', '/api/v1/users/teaching/:userid', 'teaching.destroy');
  app.get('teaching_check', '/user/:master/teaching/:apprentices', 'teaching.check');

  /**
   * starring
   * POST /users/starred/:userid
   * DELETE /users/starred/:userid
   * GET /user/:userid/starred/:otheruser
   * GET /user/:userid/starred?{page,per_page,order,sort}
   * GET /user/:userid/stargazers?{page,per_page,order,sort}
   */
  app.post('starred_create', '/users/starred/:userid', 'starring.create');
  app.delete('starred_delete', '/users/starred/:userid', 'starring.destroy');
  app.get('starred_check', '/user/:userid/starred/:otheruser', 'starring.check');
  app.get('starred_index', '/user/:userid/starred?{page,per_page,order,sort}', 'starring.show');
  app.get('stargazers', '/user/:userid/stargazers?{page,per_page,order,sort}', 'starring.stargazers');

  /**
   * apprentices
   * GET /user/:userid/apprentices
   */
  app.get('apprentices_index', '/user/:userid/apprentices', 'apprentices.index');
  /**
   * masters
   * GET /user/:userid/masters
   */
  app.get('masters_index', '/user/:userid/masters', 'masters.index');
};
