import { EggAppConfig } from 'egg';
import * as Mongoose from 'mongoose';
declare module 'egg' {
  export interface Application {
    validator: {
      validate: any;
    };
    mongoose: Mongoose;
  }
  export interface EggAppConfig {
    wxapp: {
      AppID: string;
      AppSecret: string;
    };
    jwt: {
      secret: string;
      key: string;
      ignore?: any;
    };
  }
}
