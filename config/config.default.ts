'use strict';
import { EggAppConfig } from 'egg';
import 'source-map-support/register';

declare module 'egg' {
  export interface Application {
    validator: any;
  }
}

module.exports = (appInfo: EggAppConfig) => {
  const config: any = {};

  // should change to your own
  config.keys = appInfo.name + '123456';

  // add your config here
  config.middleware = [ 'errorHandler' ];
  return config;
};
// config/config.default.js
// 如果10086被占用，你可以通过这个配置指定其他的端口号
exports.proxyworker = {
  port: 10086,
};
