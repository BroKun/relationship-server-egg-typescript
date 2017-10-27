import {Controller} from 'egg';
import {IUser} from "../common/users.model";

export default class Apprentices extends Controller {
  /**
   * 徒弟列表
   * GET /api/v1/users/:id/apprentices
   */
  public async index() {
    const {ctx} = this;
    const invalid = this.app.validator.validate({id: 'ObjectId'}, ctx.params);
    if (invalid) {
      ctx.throw(400);
    }
    const user:IUser = await ctx.model.User.findOne({ _id: ctx.params.id });
    if (!user) {
      ctx.throw(404, 'User Not Found');
    }

    const apprentices = user.apprentices;
    ctx.body = apprentices;
    ctx.status = 200;
  }
}
