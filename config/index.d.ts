import { EggAppConfig } from 'egg';
import * as Mongoose from 'mongoose';
import { Default } from './config.default'
import { Local } from './config.local'
import { Prod } from './config.prod'
import { UnitTest } from './config.unittest'
declare module 'egg' {
  export interface Application {
    validator: {
      validate: any;
    };
    mongoose: Mongoose;
  }
  export type LocalConfig = EggAppConfig &  Default &  Local ;
  export type ProdConfig = EggAppConfig &  Default &  Prod;
  export type UnitTestConfig = EggAppConfig &  Default &  UnitTest;
  export type DefaultConfig = LocalConfig|ProdConfig|UnitTestConfig;
}
