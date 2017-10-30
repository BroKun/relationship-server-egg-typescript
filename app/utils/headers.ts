import { Controller } from 'egg';

export default function cacheControl(controlStr?: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const method: () => Promise<void> = descriptor.value;
    function setNoCache() {
      (this as Controller).ctx.set('cache-control', 'no-cache');
      return method.call(this);
    }
    async function setCache() {
      const ctx = (this as Controller).ctx;
      ctx.set('cache-control', controlStr);
      await method.call(this);
      if (ctx.status >= 200 && ctx.status < 300
        && ctx.res.getHeader('cache-control') !== 'no-cache') {
        let reqEtag = ctx.req.headers['if-none-match'];
        if (typeof reqEtag === 'string') {
          if (reqEtag.startsWith('W/')) {
            reqEtag = reqEtag.substr(2, reqEtag.length - 2);
          }
        }
        if (reqEtag && reqEtag.length > 0 && ctx.res.getHeader('etag') && ctx.res.getHeader('etag') === reqEtag) {
          ctx.throw(304);
        }
      }
      return;
    }
    descriptor.value = controlStr ? setCache : setNoCache;
  };
}
