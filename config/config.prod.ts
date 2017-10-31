import { EggAppConfig } from 'egg';
import 'source-map-support/register';

export interface Prod {
  middleware: string[];
}

export default (appInfo: EggAppConfig): Prod => {
  return {
    middleware: ['errorHandler', 'notfoundHandler', 'jwt', 'jsonPretty'],
  };
};
