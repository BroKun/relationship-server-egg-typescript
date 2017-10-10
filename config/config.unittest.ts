import { EggAppConfig } from 'egg';
import 'source-map-support/register';

export interface UnitTest {
  middleware: string[];
  jwt: {
    secret: string;
    key: string;
    ignore?: any;
  };
}

export default (appInfo: EggAppConfig): UnitTest => {
  return {
    middleware: ['errorHandler', 'notfoundHandler'],
    jwt: {
      secret: 'escape master',
      key: 'user',
      ignore: '/user/token',
    },
  };
};
