import * as mm from 'egg-mock';

describe('token管理', () => {
  const app = mm.app();
  before(async () => {
    await app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('真实请求,创建token,无效的Code', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/api/tokens')
      .send({ code: 1111 })
      .expect(422);
  });
  it('成功创建token', () => {
    app.mockCsrf();
    app.mockService('wechat', 'jscode2session', async () => {
      return {
        openid: '1111',
        session_key: '1111',
        unionid: '1111',
      };
    });
    return app.httpRequest()
      .post('/api/tokens')
      .send({ code: 1111 })
      .expect(201);
  });

  it('创建token失败,微信API错误', () => {
    app.mockCsrf();
    app.mockService('wechat', 'jscode2session', async () => {
      return {
        errcode: 400000,
        errmsg: 'api错误',
      };
    });
    return app.httpRequest()
      .post('/api/tokens')
      .send({ code: 1111 })
      .expect(422);
  });
});
