import { Controller } from 'egg';
import {IUser} from "../common/users.model";

export default class Masters extends Controller {
  /**
   * 师傅列表
   * GET /api/v1/users/:id/masters
   */
  public async index() {
    const {ctx} = this;
    const invalid = this.app.validator.validate({id: 'ObjectId'}, ctx.params);
    if (!invalid) {
      ctx.throw(400);
    }
    const user:IUser = await ctx.model.User.findOne({ _id: ctx.params.id });
    if (!user) {
      ctx.throw(404, 'User Not Found');
    }

    const masters = user.masters;
    ctx.body = masters;
    ctx.status = 200;
  }
}
