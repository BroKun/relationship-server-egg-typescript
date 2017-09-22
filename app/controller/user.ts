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
    const user = new ctx.model.User(ctx.request.body);
    const savedUser = await user.save();
    ctx.body = savedUser;
    ctx.status = 201;
  }

  public async update() {
    // TODO: 更新用户
  }
}
