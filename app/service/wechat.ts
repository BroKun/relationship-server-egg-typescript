import { DefaultConfig, Service } from 'egg';
import * as queryString from 'querystring';
// import { WXError, WXSessionRes } from 'Wechat';
import constant from '../utils/constant';
import { https, ReqOps } from '../utils/httpUtil';

/**
 * 微信服务
 * 提供基于微信API的服务
 */
export default class Wechat extends Service {
  /**
   * 根据code换取微信session信息
   * @param code 从微信环境获取的编码字符串
   */
  public async jscode2session(code: string): Promise<WX.Session | WX.Error> {
    const { config } = this;
    const params = {
      appid: (config as DefaultConfig).wxapp.AppID,
      secret: (config as DefaultConfig).wxapp.AppSecret,
      js_code: code,
      grant_type: 'authorization_code',
    };
    const ops = new ReqOps(
      constant.jscode2session.hostname,
      `${constant.jscode2session.path}?${queryString.stringify(params)}`);
    return JSON.parse(await https(ops));
  }
}
