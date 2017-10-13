import * as mm from 'egg-mock';

describe('token管理', () => {
  const app = mm.app();
  before(async() => {
    await app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('真实请求,创建User', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/api/v1/users')
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
      .post('/api/v1/users')
      .send({
        realName: '张三',
        enrollmentYear: 2061,
        openId: '11111',
      })
      .expect(400);
  });

  it('请求单一User', () => {
    app.mockCsrf();
    return app.httpRequest()
      .get('/api/v1/users/59c872ee9639dd1078ceb19e')
      .expect(200);
  });
});
