import * as mm from 'egg-mock';

describe('token管理', () => {
  const app = mm.app();
  before(async () => {
    await app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('创建token', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/api/token')
      .send({code: 1111})
      .expect(422);
  });
});
