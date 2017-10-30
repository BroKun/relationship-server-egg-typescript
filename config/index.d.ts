import { EggAppConfig } from 'egg';
import { Mongoose } from 'mongoose';
import { Default } from './config.default'
import { Local } from './config.local'
import { Prod } from './config.prod'
import { UnitTest } from './config.unittest'
import { SuperTest, Test } from 'supertest';
declare module 'egg' {
  export interface Application {
    validator: {
      validate: any;
    };
    mongoose: Mongoose;
    httpRequest: () => SuperTest<Test>
  }
  export type LocalConfig = EggAppConfig & Default & Local;
  export type ProdConfig = EggAppConfig & Default & Prod;
  export type UnitTestConfig = EggAppConfig & Default & UnitTest;
  export type DefaultConfig = LocalConfig | ProdConfig | UnitTestConfig;
}
