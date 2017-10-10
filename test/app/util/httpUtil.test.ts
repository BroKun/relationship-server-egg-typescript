/**
 * Created by sun48 on 2017/10/3.
 */
import * as assert from 'assert';
import { http, ReqOps } from '../../../app/utils/httpUtil';

describe('httpUtil工具测试', () => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Content-Length': 0,
  };
  it('test http请求', async () => {
    const ops = new ReqOps(
      `jsonplaceholder.typicode.com`,
      `/posts/1`,
      `GET`,
      80,
      headers,
    );
    const res = JSON.parse(await http(ops));
    assert(res.id === 1);
  });

  it('test错误的http请求', async () => {
    const ops = new ReqOps(
      `jsonplaceholder.typicode.com`,
      `/post`,
      `GET`,
      80,
      headers,
    );
    const res = JSON.parse(await http(ops));
    assert(JSON.stringify(res) === '{}');
  });
});
