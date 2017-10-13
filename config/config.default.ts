import { EggAppConfig } from 'egg';
import 'source-map-support/register';

export interface Default {
  /**
   * token加解密
   */
  tokenSecret: string;
  keys: string;
  mongoose: {
    url: string;
    option: object;
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
      url: 'mongodb://mongo:test@101.200.36.181:27017/test',
      option: {},
    },
    wxapp: {
      AppID: 'wxb736f611f652ac16',
      AppSecret: '0693d9005ce2c0886c194c3aa9e07a4a',
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
  };
};
