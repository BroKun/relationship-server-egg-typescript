import { Application } from 'egg';

module.exports = (app: Application) => {
  app.resources('test', '/api/v1/test', 'test');
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
  /**
   * stared
   * POST /users/stared/:userid
   * DELETE /users/stared/:userid
   * GET /user/:userid/stared/:otheruser
   * GET /user/:userid/stared?{page,per_page,order,sort}
   */
  /**
   * stargazers
   * GET /user/:userid/stargazers?{page,per_page,order,sort}
   */
  /**
   * apprentices
   * GET /user/:userid/apprentices
   */
  /**
   * masters
   * GET /user/:userid/master
   */
};
