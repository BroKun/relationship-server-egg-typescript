import { Controller } from 'egg';
import { isRegular, userBaseSelect, userRegularSelect } from '../common/users.model';

export default class Masters extends Controller {
  /**
   * 师傅列表
   * GET /api/v1/users/:id/masters
   */
  public async index() {
    const { ctx, config } = this;
    const invalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
    if (invalid) {
      ctx.throw(400);
    }
    const user = ctx.model.User.findOne({ _id: ctx.params.id });
    if (!user) {
      ctx.throw(404, 'User Not Found');
    }

    const tokenInfo = ctx.state[config.jwt.key];
    ctx.body = await user.populate({
      path: 'masters',
      select: isRegular(tokenInfo) ? userRegularSelect() : userBaseSelect(),
    });
    ctx.status = 200;
  }
}
