import { Controller, DefaultConfig } from 'egg';
import * as jwt from 'jsonwebtoken';
import { SignOptionsImpl } from '../common/tokens.model';
import { isError } from '../common/wechat.model';
export default class Tokens extends Controller {
  /**
   * 登录获取openid,unionid与token
   */
  public async create() {
    const { ctx, config } = this;
    const wxRes = await ctx.service.wechat.jscode2session(ctx.request.body['code']);
    if (isError(wxRes)) {
      ctx.throw(422, { errors: wxRes });
      return;
    }
    const user = await ctx.model.User.findOne({ _id: ctx.params.id });
    if (!user) {
      ctx.throw(403, 'User Not Found');
    }
    const options = new SignOptionsImpl();
    options.audience = user._id;
    const token = jwt.sign({ ...user, ...wxRes }, (config as DefaultConfig).jwt.secret, options);
    const res = {
      token,
      openid: wxRes.openid,
      unionid: wxRes.unionid,
      user,
    };
    ctx.body = res;
    ctx.status = 201;
  }
}
