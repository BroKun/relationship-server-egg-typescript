import { Application } from 'egg';
export default (app: Application) => {
  app.validator.addRule('ObjectId', /^[0-9a-fA-F]{24}$/);
};
