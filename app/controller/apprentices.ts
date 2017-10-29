import { Controller, DefaultConfig } from 'egg';
import { isRegular, userBaseSelect, userRegularSelect } from '../common/users.model';

export default class Apprentices extends Controller {
  /**
   * 徒弟列表
   * GET /api/v1/users/:id/apprentices
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
    const tokenInfo = ctx.state[(config as DefaultConfig).jwt.key];
    const user_app = await user.populate({
      path: 'apprentices',
      select: isRegular(tokenInfo) ? userRegularSelect() : userBaseSelect(),
    });
    ctx.body = user_app.apprentices;
    ctx.status = 200;
  }
}
