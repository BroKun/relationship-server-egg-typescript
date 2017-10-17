import { Controller, DefaultConfig } from 'egg';
export default function authorized(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
  const method: () => {} = descriptor.value;
  function authCheck(): void {
    const key: string = (this.config as DefaultConfig).jwt.key;
    if ((this as Controller).ctx.state && (this as Controller).ctx.state[key]) {
      return method.call(this);
    }
    (this as Controller).ctx.throw(401);
  }
  descriptor.value = authCheck;
}
