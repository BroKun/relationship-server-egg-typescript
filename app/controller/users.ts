import { Controller } from 'egg';
import {userValidationRule} from '../common/users.model';
import authorized from '../utils/authorized';
export default class Users extends Controller {
  /**
   * 创建新用户
   * POST /users
   */
  @authorized
  public async create() {
    const { ctx } = this;
    const invalid = this.app.validator.validate(userValidationRule, ctx.request.body);
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
   * GET /users/:userid
   */
  public async show() {
    const { ctx } = this;
    const invalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
    if (invalid) {
      ctx.throw(400);
    }
    const user = await ctx.model.User.findOne({ _id: ctx.params.id });
    if (!user) {
      ctx.throw(404);
    }
    ctx.body = user;
  }

  /**
   * 修改用户信息
   * PUT /users/:userid
   */
  @authorized
  public async update() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }

  /**
   * 列举用户信息
   * GET /users{?page,per_page,order,sort,member,enrollmentYear,nickName,major}
   */
  public async index() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
}
