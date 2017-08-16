import * as httpMethod from 'http';
import * as httpsMethod from 'https';

// 发送http请求
function utilGenerator(httpMethod) {
  return (options: string, data: string|null): Promise<string> => {
    return new Promise((resolve, reject) => {
      // 请求参数
      const req = httpMethod.request(options, (res) => {
        res.setEncoding('utf8');
        const dataParts = [];
        res.on('data', (chunk) => {
          dataParts.push(chunk);
        });
        res.on('end', () => {
          try {
            const resData = dataParts.join('');
            resolve(resData);
          } catch (ex) {
            reject(ex);
          }
        });
      });
      req.on('error', (e) => {
        reject(e);
      });
      // 发送请求
      req.write(data);
      req.end();
    });
  };
}
export const http =  utilGenerator(httpMethod);
export const https =  utilGenerator(httpsMethod);
