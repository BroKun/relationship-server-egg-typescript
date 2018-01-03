import { EggAppConfig } from 'egg';

export interface UnitTest {
  middleware: string[];
}

export default (appInfo: EggAppConfig): UnitTest => {
  return {
    middleware: ['errorHandler', 'notfoundHandler', 'jwt'],
  };
};
