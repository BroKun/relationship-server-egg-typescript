import { EggAppConfig } from 'egg';
import 'source-map-support/register';

export interface Prod {
  middleware: Array<string>;
  jwt: {
    secret: string;
    key: string;
    ignore?: any;
  };
}

export default (appInfo: EggAppConfig):Prod => {
  return {
    middleware: ['errorHandler', 'jwt'],
    jwt: {
      secret: 'escape master',
      key: 'user',
      ignore: '/user/token',
    },
  };
};

export const proxyworker = {
  port: 8080,
};
