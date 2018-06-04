import { Context, EggAppConfig, PowerPartial } from 'egg';

export type Default = PowerPartial<EggAppConfig & BizConfig>;

export interface BizConfig {
  /**
   * token加解密
   */
  tokenSecret: string;
  keys: string;
  mongoose: {
    client: {
      url: string;
      option: object;
    },
  };
  wxapp: {
    AppID: string;
    AppSecret: string;
  };
  security: {
    csrf: {
      enable: boolean;
    },
  };
  jwt: {
    secret: string;
    key: string;
    passthrough: boolean;
    ignore?: any;
  };
}

export default (appInfo: EggAppConfig): Default => {
  return {
    keys: appInfo.name + 'escape-master',
    tokenSecret: '',
    mongoose: {
      client: {
        url: 'mongodb://mongo:test@101.200.36.181:27017/test',
        option: {
          poolSize: 20,
        },
      },
    },
    wxapp: {
      AppID: 'wx.appId',
      AppSecret: 'wx.appSecret',
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    jwt: {
      secret: 'escape master',
      key: 'user',
      passthrough: true,
    },
    onerror: {
      all(err, ctx: Context) {
        const status = err.status || 500;
        // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
        const error = status === 500 && appInfo.env === 'prod'
          ? 'Internal Server Error'
          : err.message;
        // 从 error 对象上读出各个属性，设置到响应中
        const bodyObj = { error, detail: {} };
        if (status === 422) {
          bodyObj.detail = err.errors;
        }
        ctx.body = bodyObj;
        ctx.status = status;
      },
    },
  };
};
