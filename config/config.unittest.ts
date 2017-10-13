import { EggAppConfig } from 'egg';
import 'source-map-support/register';

export interface UnitTest {
  middleware: string[];
}

export default (appInfo: EggAppConfig): UnitTest => {
  return {
    middleware: ['errorHandler', 'notfoundHandler', 'jwt'],
  };
};
