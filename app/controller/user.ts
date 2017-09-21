import { Controller } from 'egg';

export default class User extends Controller {
  public async show() {
    // TODO: 查询用户信息
  }

  public async index() {
    // TODO:
  }

  public async create() {
    const { ctx } = this;
    const user = new ctx.model.User({
      openId: ctx.request.body['openId'],
      realName: ctx.request.body['realName'],
      enrollmentYear: ctx.request.body['enrollmentYear'],
    });
    const savedUser = await user.save();
    ctx.body = savedUser;
  }

  public async update() {
    // TODO: 更新用户
  }
}
