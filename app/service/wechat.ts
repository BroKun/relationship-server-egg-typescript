import { Service } from 'egg';
import * as queryString from 'querystring';
import constant from '../utils/constant';
import { https, ReqOps } from '../utils/httpUtil';

interface Jscode2sessionRes {
  openid?: string;
  session_key?: string;
  unionid?: string;
  errcode?: number;
  errmsg?: string;
}

export default class TestService extends Service {
  public async jscode2session(code: string): Promise<Jscode2sessionRes> {
    const { config } = this;
    const params = {
      appid: config.wxapp.AppID,
      secret: config.wxapp.AppSecret,
      js_code: code,
      grant_type: 'authorization_code',
    };
    const ops = new ReqOps(
      constant.jscode2session.hostname,
      `${constant.jscode2session.path}?${queryString.stringify(params)}`);
    console.log(ops);
    return JSON.parse(await https(ops));
  }
}
