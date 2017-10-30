import { Controller, DefaultConfig } from 'egg';
import { defaultQuery, pagedQuery, queryValidationRule } from '../common/query.model';
import { isRegular, isUser, userBaseSelect, userRegularSelect, userValidationRule } from '../common/users.model';
import authorized from '../utils/authorized';

export default class Users extends Controller {
  /**
   * 创建新用户
   * POST /api/v1/users
   */
  @authorized()
  public async create() {
    const { app, ctx } = this;
    const invalid = app.validator.validate(userValidationRule, ctx.request.body);
    if (invalid) {
      ctx.throw(400);
    }
    const user = new ctx.model.User(ctx.request.body);
    const savedUser = await user.save();
    ctx.body = savedUser;
    ctx.status = 201;
  }

  /**
   * 获取用户信息
   * GET /api/v1/users/:id
   */
  public async show() {
    const { app, ctx, config } = this;
    const invalid = app.validator.validate({ id: 'ObjectId' }, ctx.params);
    if (invalid) {
      ctx.throw(400);
    }
    const tokenInfo: Relationship.Token<Relationship.User> = ctx.state[(config as DefaultConfig).jwt.key];
    const isRegularUser = isUser(tokenInfo) && (tokenInfo._id === ctx.params.id || isRegular(tokenInfo));
    const user = await ctx.model.User
      .findOne({ _id: ctx.params.id })
      .select(isRegularUser ? userRegularSelect() : userBaseSelect());
    if (!user) {
      ctx.throw(404);
    }
    ctx.body = user;
    ctx.status = 200;
  }

  /**
   * 修改用户信息
   * PUT /api/v1/users/:id
   */
  @authorized()
  public async update() {
    const { ctx } = this;
    const invalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
    if (invalid) {
      ctx.throw(400);
    }
    const conditions = { _id: ctx.params.id };
    const update = { $set: ctx.request.body };
    await ctx.model.User.update(conditions, update, {});
    ctx.status = 204;
  }

  /**
   * 列举用户信息
   * GET /api/v1/users{?page,per_page,order,sort,member,enrollmentYear,nickName,major}
   */
  public async index() {
    const { app, ctx } = this;
    const type = ctx.query.type || 0;
    const query = ctx.query;
    delete query['type'];
    const conditions = { type: type }; // 查询条件
    if (ctx.query.enrollmentYear) {
      conditions['enrollmentYear'] = query.enrollmentYear;
      delete query['enrollmentYear'];
    }
    if (ctx.query.nickName) {
      conditions['nickName'] = query.nickName;
      delete query['nickName'];
    }
    if (ctx.query.major) {
      conditions['major'] = query.major;
      delete query['major'];
    }

    let listQuery = ctx.model.User.find(conditions);

    const queriesInvalid = app.validator.validate(queryValidationRule, query);
    const queries: Relationship.Query = queriesInvalid ? defaultQuery() : query;
    listQuery = pagedQuery(listQuery, queries);
    ctx.body = await listQuery;
    ctx.status = 200;
  }
}
