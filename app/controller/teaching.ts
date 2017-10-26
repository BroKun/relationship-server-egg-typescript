import {Controller, DefaultConfig} from 'egg';
//import authorized from '../utils/authorized';
import {IUser} from "../common/users.model";

export default class Teaching extends Controller {
  /**
   * 建立师徒关系
   * POST /users/teaching/:userid
   */
  @authorized()
  public async create() {
    const {ctx, config} = this;
    ctx.state = 204;
    const invalid = this.app.validator.validate({id: 'ObjectId'}, ctx.params);
    if (invalid) {
      ctx.throw(400);
    }
    const key: string = (config as DefaultConfig).jwt.key;
    const token = ctx.state[key];

    const stu: IUser = await ctx.model.User.findOne({_id: token._id});
    const master: IUser = await ctx.model.User.findOne({_id: ctx.params.id});
    master.apprentices.push(stu);
    await master.save();
    stu.masters = ctx.params.id;
    await stu.save();
    ctx.state = 204;
  }

  /**
   * 删除师徒关系
   * DELETE /users/teaching/:userid
   */
  @authorized()
  public async destroy() {
    const {ctx} = this;
    ctx.state = 204;
    const invalid = this.app.validator.validate({id: 'ObjectId'}, ctx.params);
    if (invalid) {
      ctx.throw(400);
    }

    const stu: IUser = await ctx.model.User.findOne({_id: '59e766cbd07ee90cb1b9817c'});
    const master: IUser = await ctx.model.User.findOne({_id: ctx.params.id});
    for (let i = 0; i < master.apprentices.length; ++i) {
      if (master.apprentices[i]._id === stu._id) {
        master.apprentices.slice(i, 1);
        break;
      }
    }
    await master.save();
    stu.masters = null;
    await stu.save();
    ctx.state = 204;
  }

  /**
   * 验证师徒关系
   * GET /user/:master/teaching/:apprentices
   */
  public async check() {
    const {ctx} = this;
    const invalid_m = this.app.validator.validate({master: 'ObjectId'}, ctx.params);
    const invalid_a = this.app.validator.validate({apprentices: 'ObjectId'}, ctx.params);
    if (invalid_m || invalid_a) {
      ctx.throw(400);
    }

    const user: IUser = await ctx.model.User.findOne({_id: ctx.params.master});
    if (user.apprentices.find((x) => x._id == ctx.params.apprentices)) {
      ctx.body = true;
    }
    ctx.body = false;
    ctx.status = 200;
  }
}
