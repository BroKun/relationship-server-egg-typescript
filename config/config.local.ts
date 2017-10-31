import { EggAppConfig } from 'egg';
import 'source-map-support/register';

export interface Local {
  middleware: string[];
}

export default (appInfo: EggAppConfig): Local => {
  return {
    middleware: ['errorHandler', 'notfoundHandler', 'jwt', 'jsonPretty'],
  };
};
