import * as httpMethod from 'http';
import * as httpsMethod from 'https';

// 发送http请求
function utilGenerator(httpMethod) {
  return (options: ReqOps, data?: string | null): Promise<string> => {
    return new Promise((resolve, reject) => {
      // 请求参数
      const req = httpMethod.request(options, (res) => {
        res.setEncoding('utf8');
        const dataParts = [];
        res.on('data', (chunk) => {
          dataParts.push(chunk);
        });
        res.on('end', () => {
          const resData = dataParts.join('');
          resolve(resData);
        });
      });
      req.on('error', (e) => {
        reject(e);
      });
      // 发送请求
      if (data) { req.write(data); }
      req.end();
    });
  };
}
export const http = utilGenerator(httpMethod);
export const https = utilGenerator(httpsMethod);
interface Headers {
  'Content-Type'?: string;
  'Content-Length'?: string | number;
}
export class ReqOps {
  public method: string = 'GET';
  public hostname: string;
  public port?: number;
  public path?: string;
  public headers?: Headers;
  constructor(
    hostname: string = 'localhost',
    path: string = '/',
    method?: string | null,
    port?: number | null,
    headers?: Headers | null) {
    this.hostname = hostname;
    this.path = path;
    if (method) { this.method = method; }
    if (port) { this.port = port; }
    if (headers) { this.headers = headers; }
  }
}
