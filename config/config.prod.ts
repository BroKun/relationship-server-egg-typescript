import { EggAppConfig } from 'egg';
import 'source-map-support/register';

module.exports = (appInfo: EggAppConfig) => {
  const config: any = {};
  return config;
};

exports.proxyworker = {
  port: 8080,
};
