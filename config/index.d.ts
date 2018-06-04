import { Context, EggAppConfig, PowerPartial, Service } from 'egg';
import { Document, Model, Mongoose } from 'mongoose';
import { SuperTest, Test } from 'supertest';
import ExportConfigDefault from './config.default';
import ExportConfigLocal from './config.local';
import ExportConfigProd from './config.prod';
import ExportConfigUnittest from './config.unittest';
type Default = ReturnType<typeof ExportConfigDefault>;
type Local = ReturnType<typeof ExportConfigLocal>;
type Prod = ReturnType<typeof ExportConfigProd>;
type UnitTest = ReturnType<typeof ExportConfigUnittest>;
declare module 'egg' {
  export type LocalConfig = EggAppConfig & Default & Local;
  export type ProdConfig = EggAppConfig & Default & Prod;
  export type UnitTestConfig = EggAppConfig & Default & UnitTest;
  export type IAppConfig = LocalConfig | ProdConfig | UnitTestConfig;
  export interface Application {
    validator: {
      validate: (rule: object | string, obj: object) => object | void;
      addRule: (ruleName: string, rule: objetc | RegExp) => void;
    };
    mongoose: Mongoose;
    config: IAppConfig;
    httpRequest: () => SuperTest<Test>;
  }
  export interface Controller {
    config: IAppConfig;
  }
  export interface Service {
    config: IAppConfig;
  }
}
