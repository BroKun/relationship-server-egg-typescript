import { EggAppConfig } from 'egg';
import 'source-map-support/register';

module.exports = (appInfo: EggAppConfig) => {
  const config: any = {};
  config.middleware = ['jwt' ];
  config.jwt = {
    secret: 'escape master',
    key: 'user',
    ignore: '/user/token',
  };
  return config;
};

exports.proxyworker = {
  port: 8080,
};
