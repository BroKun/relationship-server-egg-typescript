import { EggAppConfig } from 'egg';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
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
    };
  }
}
interface Privacy {
  mongoose: {
    url: string;
    option: object;
  };
}
module.exports = (appInfo: EggAppConfig) => {
  const privacyInfo: Privacy = yaml.safeLoad(fs.readFileSync(`./config.yml`, 'utf8'));
  const config: any = {};
  config.keys = appInfo.name + '123456';
  config.mongoose = privacyInfo.mongoose;
  config.wxapp = {
    AppID: 'wxb736f611f652ac16',
    AppSecret: '0693d9005ce2c0886c194c3aa9e07a4a',
  };
  return config;
};

exports.proxyworker = {
  port: 10086,
};
