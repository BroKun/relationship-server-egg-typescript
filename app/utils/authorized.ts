import { Controller, DefaultConfig } from 'egg';

export default function authorized<T>(validat?: (tokens: Relationship.Token<T>) => boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const method: () => {} = descriptor.value;
    function authCheck(): void {
      const key: string = (this.config as DefaultConfig).jwt.key;
      if ((this as Controller).ctx.state && (this as Controller).ctx.state[key]) {
        const tokenInfo: Relationship.Token<T> = (this as Controller).ctx.state[key];
        if (!validat || validat(tokenInfo)) {
          return method.call(this);
        }
        (this as Controller).ctx.throw(403);
      }
      (this as Controller).ctx.throw(401);
    }
    descriptor.value = authCheck;
  };
}
