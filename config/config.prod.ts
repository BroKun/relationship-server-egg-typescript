import { EggAppConfig } from 'egg';

export interface Prod {
  middleware: string[];
}

export default (appInfo: EggAppConfig): Prod => {
  return {
    middleware: ['errorHandler', 'notfoundHandler', 'jwt', 'jsonPretty'],
  };
};
