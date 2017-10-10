import { Application, Context } from 'egg';

export default (option, app: Application) => {
  return async function notfound_handler(ctx: Context, next): Promise<void> {
    if (ctx.status === 404 || ctx.realStatus === 404) {
      ctx.throw(404, 'not found');
    }
    await next();
  };
};
