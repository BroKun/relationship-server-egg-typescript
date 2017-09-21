import * as assert from 'assert';
import * as mm from 'egg-mock';

describe('测试模块', () => {
  const app = mm.app();
  before(async () => {
    await app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('服务正常启动', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('test index请求', () => {
    return app.httpRequest()
      .get('/api/test?page=1&tab=test&limit=1')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert(res.body.page === '1');
      });
  });
  it('test get请求', () => {
    return app.httpRequest()
      .get('/api/test/123')
      .expect(200)
      .expect((res) => {
        assert(res.text.startsWith('show:'));
      });
  });
  it('test post请求', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/api/test')
      .send({ content: 'test' })
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert(res.body.id.startsWith('create:'));
      });
  });
  it('test put请求', () => {
    app.mockCsrf();
    return app.httpRequest()
      .put('/api/test/123')
      .expect(204);
  });
});
