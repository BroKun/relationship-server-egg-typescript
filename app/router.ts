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
   * {
   *   "_id": "59f1cd15c4ba889296e3b596",
   *   "openId": "30624770",
   *   "nickName": "阿四",
   *   "enrollmentYear": 2011,
   *   "bio": "聪少最帅",
   *   "avatar": "https://avatars2.githubusercontent.com/u/11978904?s=40&v=4"
   * }
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
   * @apiDefine UserList
   * @apiSuccess (200) UserList List of Userinfo
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   * [
   *  {
   *    "_id": "59f1cd15c4ba889296e3b596",
   *    "openId": "30624770",
   *    "nickName": "阿四",
   *    "enrollmentYear": 2011,
   *    "bio": "聪少最帅",
   *    "avatar": "https://avatars2.githubusercontent.com/u/11978904?s=40&v=4"
   *  }
   * ]
   */
  /**
   * @apiDefine UserInfo
   * @apiSuccess (200) UserInfo Info of User
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   * {
   *   "_id": "59f1cd15c4ba889296e3b596",
   *   "openId": "30624770",
   *   "nickName": "阿四",
   *   "enrollmentYear": 2011,
   *   "bio": "聪少最帅",
   *   "avatar": "https://avatars2.githubusercontent.com/u/11978904?s=40&v=4"
   * }
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
   * @api {post} /api/v1/user/starred/:id 点赞
   * @apiName starred_create
   * @apiGroup starring
   * @apiPermission Authorized
   * @apiVersion 1.0.0
   * @apiParam {string} id starred id.
   * @apiUse NoContent
   * @apiUse InvalidId
   * @apiUse Unauthorized
   * @apiUse UserNotFound
   */
  app.post('starred_create', '/api/v1/user/starred/:id', 'starring.create');
  /**
   * starring
   * @api {delete} /api/v1/user/starred/:id 取消赞
   * @apiName starred_delete
   * @apiGroup starring
   * @apiPermission Authorized
   * @apiVersion 1.0.0
   * @apiParam {string} id starred id.
   * @apiUse NoContent
   * @apiUse InvalidId
   * @apiUse Unauthorized
   */
  app.delete('starred_delete', '/api/v1/user/starred/:id', 'starring.destroy');
  /**
   * starring
   * @api {get} /api/v1/users/:stargazer/starred/:starred 验证点赞关系
   * @apiName starred_check
   * @apiGroup starring
   * @apiVersion 1.0.0
   * @apiParam {string} stargazer stargazer id.
   * @apiParam {string} starred starred id.
   * @apiUse NoContent
   * @apiUse NotModified
   * @apiUse InvalidId
   * @apiUse NotFound
   */
  app.get('starred_check', '/api/v1/users/:stargazer/starred/:starred', 'starring.check');

  /**
   * starring
   * @api {get} /api/v1/users/:id/starred 赞过谁
   * @apiName starred_show
   * @apiGroup starring
   * @apiVersion 1.0.0
   * @apiParam {string} id stargazers id.
   * @apiUse UserList
   * @apiUse NotModified
   * @apiUse InvalidId
   */
  app.get('starred_show', '/api/v1/users/:id/starred', 'starring.show');
  /**
   * starring
   * @api {get} /api/v1/users/:id/stargazers 谁赞过
   * @apiName stargazers_show
   * @apiGroup starring
   * @apiVersion 1.0.0
   * @apiParam {string} id starred id.
   * @apiUse UserList
   * @apiUse NotModified
   * @apiUse InvalidId
   */
  app.get('stargazers_show', '/api/v1/users/:id/stargazers', 'starring.stargazers');

  /**
   * apprentices
   * @api {get} /api/v1/users/:id/apprentices 徒弟
   * @apiName apprentices_index
   * @apiGroup apprentices
   * @apiVersion 1.0.0
   * @apiParam {string} id master id.
   * @apiUse UserList
   * @apiUse NotModified
   * @apiUse InvalidId
   * @apiUse UserNotFound
   */
  app.get('apprentices_index', '/api/v1/users/:id/apprentices', 'apprentices.index');
  /**
   * masters
   * @api {get} /api/v1/users/:id/masters 师傅
   * @apiName masters_index
   * @apiGroup masters
   * @apiVersion 1.0.0
   * @apiParam {string} id apprentice id.
   * @apiUse UserInfo
   * @apiUse NotModified
   * @apiUse InvalidId
   * @apiUse UserNotFound
   */
  app.get('masters_index', '/api/v1/users/:id/masters', 'masters.index');

  /**
   * users
   * @api {post} /api/v1/users 创建用户
   * @apiName user_create
   * @apiGroup users
   * @apiVersion 1.0.0
   * @apiParam {string} id apprentice id.
   * @apiUse Created
   * @apiUse InvalidId
   */
  app.post('user_create', '/api/v1/users', 'users.create');
  /**
   * users
   * @api {get} /api/v1/users/:id 获取用户信息
   * @apiName user_show
   * @apiGroup users
   * @apiVersion 1.0.0
   * @apiParam {string} id user id.
   * @apiUse UserInfo
   * @apiUse NotModified
   * @apiUse InvalidId
   * @apiUse UserNotFound
   */
  app.get('user_show', '/api/v1/users/:id', 'users.show');
  /**
   * users
   * @api {put} /api/v1/users/:id 修改用户信息
   * @apiName user_update
   * @apiGroup users
   * @apiVersion 1.0.0
   * @apiPermission Authorized
   * @apiParam {string} id user id.
   * @apiUse Created
   * @apiUse InvalidId
   * @apiUse Unauthorized
   */
  app.put('user_update', '/api/v1/users/:id', 'users.update');
  /**
   * users
   * @api {get} /api/v1/users 查询用户信息
   * @apiName user_index
   * @apiGroup users
   * @apiVersion 1.0.0
   * @apiParam {string} id user id.
   * @apiUse UserList
   */
  app.get('user_index', '/api/v1/users', 'users.index');
};
