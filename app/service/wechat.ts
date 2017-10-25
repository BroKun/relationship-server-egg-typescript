import { DefaultConfig, Service } from 'egg';
import constant from '../utils/constant';

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
    const { config, ctx } = this;
    const params = {
      appid: (config as DefaultConfig).wxapp.AppID,
      secret: (config as DefaultConfig).wxapp.AppSecret,
      js_code: code,
      grant_type: 'authorization_code',
    };
    const result = await ctx.curl(constant.jscode2session, {
      method: 'GET',
      dataType: 'json',
      data: params,
    });
    return result;
  }
}
