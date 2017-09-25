import * as mm from 'egg-mock';

describe('token管理', () => {
  const app = mm.app();
  before(async () => {
    await app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('真实请求,创建User', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/api/user')
      .send({
        realName: '张三',
        enrollmentYear: 2001,
        openId: '11111',
      })
      .expect(201);
  });
  it('数据验证失败', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/api/user')
      .send({
        realName: '张三',
        enrollmentYear: 2061,
        openId: '11111',
      })
      .expect(400);
  });
});
