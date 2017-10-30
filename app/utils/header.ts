import { Controller } from 'egg';

export default function cacheControl(controlStr?: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const method: () => {} = descriptor.value;
    function cacheSet() {
      (this as Controller).ctx.set('Cache-Control', controlStr ? controlStr : 'no-cache');
      return method.call(this);
    }
    descriptor.value = cacheSet;
  };
}
