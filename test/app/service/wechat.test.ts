import * as assert from 'assert';
import * as mm from 'egg-mock';

describe('微信接口服务测试', () => {
  const app = mm.app();
  before(async () => {
    await app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);
  it('错误的请求', async () => {
    const ctx = app.mockContext();
    const res = await ctx.service.wechat.jscode2session('wrong code');
    assert(res);
    assert((res as WX.Error).errcode);
  });
});
