import { EggAppConfig } from 'egg';

export interface Local {
  middleware: string[];
}

export default (appInfo: EggAppConfig): Local => {
  return {
    middleware: ['errorHandler', 'notfoundHandler', 'jwt', 'jsonPretty'],
  };
};
