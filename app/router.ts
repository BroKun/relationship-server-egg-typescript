import { Application } from 'egg';

module.exports = (app: Application) => {
  /**
   * @apiDefine Authorized Users that have signed up
   */
  /**
   * @apiDefine Regular Our full member
   */
  /**
   * @apiDefine Created
   * @apiSuccess (201) Created Created a new resource
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 201 Created
   */
  /**
   * @apiDefine NoContent
   * @apiSuccess (204) NoContent There is nothing to say
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 204 No Content
   */
  /**
   * @apiDefine NotModified
   * @apiSuccess (304) NotModified The resource taht have not been modified after your last call
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 304 Not Modified
   */
  /**
   * @apiDefine BadRequest
   * @apiError (400) BadRequest We find your parameters have some error
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 400 Bad Request
   *    {
   *      code: 'missing_field',
   *      field: 'nickName',
   *      message: 'required'
   *    }
   */
  /**
   * @apiDefine InvalidId
   * @apiError (400) InvalidId We find your parameter id is invalid
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 400 Bad Request
   *    {
   *      code: 'missing_field',
   *      field: 'id',
   *      message: 'required'
   *    }
   */
  /**
   * @apiDefine Unauthorized
   * @apiError (401) Unauthorized You're not authorized yet
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 401 Unauthorized
   */
  /**
   * @apiDefine PermissionDenied
   * @apiError (403) PermissionDenied You have no permission to do this
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 403 Forbidden
   */
  /**
   * @apiDefine NotFound
   * @apiError (404) NotFound There is no resource you want
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   */
  /**
   * @apiDefine UserNotFound
   * @apiError (404) UserNotFound User is not found
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   */
  /**
   * teaching
   * @api {post} /api/v1/user/teaching/:id 建立师徒关系
   * @apiName teaching_create
   * @apiGroup teaching
   * @apiPermission Authorized
   * @apiVersion 1.0.0
   * @apiParam {string} id apprentice id.
   * @apiUse NoContent
   * @apiUse InvalidId
   * @apiUse Unauthorized
   * @apiUse UserNotFound
   */
  app.post('teaching_create', '/api/v1/user/teaching/:id', 'teaching.create');
  /**
   * teaching
   * @api {delete} /api/v1/user/teaching/:id 取消师徒关系
   * @apiName teaching_delete
   * @apiGroup teaching
   * @apiPermission Authorized
   * @apiVersion 1.0.0
   * @apiParam {string} id apprentice id.
   * @apiUse NoContent
   * @apiUse InvalidId
   * @apiUse Unauthorized
   * @apiUse UserNotFound
   */
  app.delete('teaching_delete', '/api/v1/user/teaching/:id', 'teaching.destroy');
  /**
   * teaching
   * @api {delete} /api/v1/users/:master/teaching/:apprentice 验证师徒关系
   * @apiName teaching_check
   * @apiGroup teaching
   * @apiVersion 1.0.0
   * @apiParam {string} master master id.
   * @apiParam {string} apprentice apprentice id.
   * @apiUse NoContent
   * @apiUse NotModified
   * @apiUse InvalidId
   * @apiUse UserNotFound
   */
  app.get('teaching_check', '/api/v1/users/:master/teaching/:apprentice', 'teaching.check');

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
