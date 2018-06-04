import { EggAppConfig, PowerPartial } from 'egg';

export interface Prod {
  middleware: string[];
  test: string;
}

export default (appInfo: EggAppConfig): PowerPartial<EggAppConfig & Prod> => {
  return {
    middleware: ['errorHandler', 'notfoundHandler', 'jwt', 'jsonPretty'],
    test: '',
  };
};
