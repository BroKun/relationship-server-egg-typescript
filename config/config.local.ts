import { EggAppConfig, PowerPartial } from 'egg';

export interface Local {
  middleware: string[];
}

export default (appInfo: EggAppConfig): PowerPartial<EggAppConfig & Local> => {
  return {
    middleware: ['errorHandler', 'notfoundHandler', 'jwt', 'jsonPretty'],
  };
};
