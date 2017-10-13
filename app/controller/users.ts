import { Controller } from 'egg';
import authorized from '../utils/authorized';

const userValidationRule = {
  realName: 'string',
  enrollmentYear: {
    type: 'int',
    min: 1990,
    max: 2050,
    required: 'false',
  },
  openId: 'string',
};
function isString(x: any): x is string {
  return typeof x === 'string';
}
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
      ctx.throw(400, { errors: invalid });
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
    if (isString(ctx.params.id)) {
      const user = await ctx.model.User.find({ _id: ctx.params.id });
      ctx.body = user;
      return;
    }
    ctx.throw(400, { errors: { id: ctx.params.id } });
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
   * GET /users{?page,per_page,order,sort}
   */
  public async index() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
}
