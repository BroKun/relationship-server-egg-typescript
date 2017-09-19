import { Controller } from 'egg';
import * as moment from 'moment';
import ErrorRes from '../common/error';

export default class User extends Controller {
  public async show() {
    // TODO: 查询用户信息
  }

  public async index() {
    // TODO:
  }

  public async create() {
    const { ctx } = this;
    console.log(ctx.A);
    ctx.body = await ctx.model.User.find({});
  }

  public async update() {
    // TODO: 更新用户
  }
}
