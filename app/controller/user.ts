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
  public async token() {
    const { ctx, config } = this;
    const wxRes = await ctx.service.wechat.jscode2session(ctx.query.code);
    if (wxRes.errcode) { throw new ErrorRes(422, wxRes); }
    const token: string = jwt.sign({ ...wxRes, exp: moment().add(30, 'days').unix() }, config.jwt.secret);
    const res: SessionInfo = {
      token,
      openid: wxRes.openid,
      unionid: wxRes.unionid,
    };
    ctx.body = res;
  }
}
