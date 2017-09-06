import { Controller } from 'egg';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
import ErrorRes from '../common/error';
interface SessionInfo {
  openid: string;
  unionid: string;
  token?: string;
}
export default class User extends Controller {
  /**
   * 登录获取openid,unionid与token
   */
  public async token(): Promise<SessionInfo> {
    const { ctx, config } = this;
    const res = await ctx.service.wechat.jscode2session(ctx.query.code);
    if (res.errcode) { throw new ErrorRes(422, res); }
    const token: string = jwt.sign({ ...res, exp: moment().add(30, 'days').unix() }, config.jwt.secret);
    return {
      token,
      openid: res.openid,
      unionid: res.unionid,
    };
  }
}
