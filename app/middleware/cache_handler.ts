import { Application, Context } from 'egg';

export default (option, app: Application) => {
  return async function errHandler(ctx: Context, next): Promise<void> {
    await next();
    if (ctx.status >= 200 && ctx.status < 300
      && ctx.res.getHeader('Cache-Control') !== 'no-cache') {
      let reqEtag: string = ctx.headers['If-None-Match'];
      if (reqEtag.startsWith('W/')) {
        reqEtag = reqEtag.substr(2, reqEtag.length - 2);
      }
      if (reqEtag && reqEtag.length > 0 && ctx.res.getHeader('Etag') && ctx.res.getHeader('Etag') === reqEtag) {
        ctx.throw(304);
      }
    }
  };
};
