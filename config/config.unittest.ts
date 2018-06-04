import { EggAppConfig, PowerPartial } from 'egg';

export interface UnitTest {
  middleware: string[];
}

export default (appInfo: EggAppConfig): PowerPartial<EggAppConfig & UnitTest> => {
  return {
    middleware: ['errorHandler', 'notfoundHandler', 'jwt'],
  };
};
