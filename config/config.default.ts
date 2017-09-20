import { EggAppConfig } from 'egg';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import 'source-map-support/register';


interface Privacy {
  mongoose: {
    url: string;
    option: object;
  };
  wxapp: {
    AppID: string;
    AppSecret: string;
  };
}
export type Default = Privacy & {
  /**
   * token加解密
   */
  tokenSecret: string;
}

export default (appInfo: EggAppConfig): Default => {
  const privacyInfo: Privacy = yaml.safeLoad(fs.readFileSync(`config/config.yml`, 'utf8'));
  const config: Default = Object.assign({
    keys: appInfo.name + '123456',
    tokenSecret: '',
  }, privacyInfo);
  return config;
};

export const proxyworker = {
  port: 10086,
};
