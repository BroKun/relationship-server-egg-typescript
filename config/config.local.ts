import { EggAppConfig } from 'egg';
import 'source-map-support/register';

export interface Local {
  middleware: string[];
  jwt: {
    secret: string;
    key: string;
    ignore?: any;
  };
}

export default (appInfo: EggAppConfig): Local => {
  return {
    middleware: ['errorHandler', 'notfoundHandler', 'jwt'],
    jwt: {
      secret: 'escape master',
      key: 'user',
      ignore: '/api/v1/tokens',
    },
  };
};
