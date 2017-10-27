import { Controller, DefaultConfig } from 'egg';
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
    const {ctx} = this;
    const invalid = this.app.validator.validate({id: 'ObjectId'}, ctx.params);
    if (invalid) {
      ctx.throw(400);
    }
    const conditions = {_id: ctx.params.id};
    const update = {$set: ctx.request.body};
    await ctx.model.User.update(conditions, update, {});
    ctx.status = 204;
  }

  /**
   * 列举用户信息
   * GET /api/v1/users{?page,per_page,order,sort,member,enrollmentYear,nickName,major}
   */
  public async index() {
    const {ctx} = this;
    const page = ctx.query.page;
    const per_page = ctx.query.per_page;
    const order = ctx.query.order;
    const sort: string = ctx.query.sort;
    const member = ctx.query.member;
    const enrollmentYear = ctx.query.enrollmentYear;
    const nickName = ctx.query.nickName;
    const major = ctx.query.major;
    const conditions = { member: member }; // 查询条件
    if (enrollmentYear) conditions['enrollmentYear'] = enrollmentYear;
    if (nickName) conditions['nickName'] = nickName;
    if (major) conditions['major'] = major;

    const users = await ctx.model.User.find(conditions)
      .sort(order == '1' ? '' : '-' + `${ sort }`)
      .skip((page - 1) * per_page)
      .limit(per_page);
    ctx.body = users;
    ctx.status = 200;
  }
}
