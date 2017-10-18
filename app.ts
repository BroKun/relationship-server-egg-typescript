export default (app) => {
  app.validator.addRule('ObjectId', /^[0-9a-fA-F]{24}$/);
};
