import { Controller } from 'egg';
import * as jwt from 'jsonwebtoken';
import { SignOptions } from '../common/tokens.model';
import { isError } from '../common/wechat.model';
export default class Tokens extends Controller {
  /**
   * 登录获取openid,unionid与token
   * POST /api/v1/tokens
   */
  public async create() {
    const { ctx, config } = this;
    const wxRes = await ctx.service.wechat.jscode2session(ctx.request.body['code']);
    if (isError(wxRes)) {
      ctx.throw(422, { errors: wxRes });
      return;
    }
    const user = await ctx.model.User.findOne({ openId: wxRes.openid });
    if (!user) {
      ctx.throw(403, 'User Not Found');
    }
    const options = SignOptions();
    options.audience = user._id.toString();
    const token = jwt.sign({ ...user, ...wxRes, openId: wxRes.openid }, config.jwt.secret, options);
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
