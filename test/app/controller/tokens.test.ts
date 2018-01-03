import mm from 'egg-mock';

describe('token管理', () => {
  const app = mm.app();
  before(async () => {
    await app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('真实请求,创建token,无效的Code', () => {
    return app.httpRequest()
      .post('/api/v1/tokens')
      .send({ code: 1111 })
      .expect(422);
  });
  it('成功创建token', () => {
    app.mockService('wechat', 'jscode2session', async () => {
      return {
        openid: '30624700',
        session_key: '1111',
        unionid: '1111',
      };
    });
    return app.httpRequest()
      .post('/api/v1/tokens')
      .send({ code: 1111 })
      .expect(201);
  });
  it('用户尚未注册,无法生成Token', () => {
    app.mockService('wechat', 'jscode2session', async () => {
      return {
        openid: '1111',
        session_key: '1111',
        unionid: '1111',
      };
    });
    return app.httpRequest()
      .post('/api/v1/tokens')
      .send({ code: 1111 })
      .expect(403);
  });
  it('创建token失败,微信API错误', () => {
    app.mockService('wechat', 'jscode2session', async () => {
      return {
        errcode: 400000,
        errmsg: 'api错误',
      };
    });
    return app.httpRequest()
      .post('/api/v1/tokens')
      .send({ code: 1111 })
      .expect(422);
  });
});
