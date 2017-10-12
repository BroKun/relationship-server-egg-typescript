import { Controller } from 'egg';
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
export default class User extends Controller {
  public async show() {
    const { ctx } = this;
    if (isString(ctx.params.id)) {
      const user = await ctx.model.User.find({ _id: '59c872ee9639dd1078ceb19e' });
      ctx.body = user;
      return;
    }
    ctx.throw(422, '仅允许依赖单个id查找');
  }

  public async create() {
    const { ctx } = this;
    const invalid = this.app.validator.validate(userValidationRule, ctx.request.body);
    if (invalid) {
      ctx.body = invalid;
      ctx.status = 400;
      return;
    }
    const user = new ctx.model.User(ctx.request.body);
    const savedUser = await user.save();
    ctx.body = savedUser;
    ctx.status = 201;
  }
}
