import { EggAppConfig } from 'egg';
import 'source-map-support/register';

declare module 'egg' {
  export interface Application {
    validator: {
      validate: any;
    };
  }
  export interface EggAppConfig {
    wxapp: {
      AppID: string;
      AppSecret: string;
    };
    jwt: {
      secret: string;
      key: string;
      ignore?: any;
    }
  }
}

module.exports = (appInfo: EggAppConfig) => {
  const config: any = {};
  config.keys = appInfo.name + '123456';
  config.middleware = [ 'errorHandler', 'jwt' ];
  config.wxapp = {
    AppID: 'wxb736f611f652ac16',
    AppSecret: '0693d9005ce2c0886c194c3aa9e07a4a',
  };
  config.jwt = {
    secret: 'escape master',
    key: 'user',
    ignore: '/login',
  };
  return config;
};

exports.proxyworker = {
  port: 10086,
};
