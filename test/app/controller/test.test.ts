'use strict';

import * as assert from 'assert';
import * as mm from 'egg-mock';

describe('test/app/controller/home.test.js', () => {
  const app = mm.app();
  before(async () => {
    await app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('test index', () => {
    return app.httpRequest()
      .get('/api/v1/test?page=1&tab=test&limit=1')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        assert(res.body.page === '1');
      });
  });
  it('test show', () => {
    return app.httpRequest()
      .get('/api/v1/test/123')
      .expect(200)
      .expect(res => {
        assert(res.text.startsWith('show:'));
      });
  });
  it('test create', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/api/v1/test')
      .send({ content: 'test' })
      .expect(201)
      .expect('Content-Type', /json/)
      .expect(res => {
        assert(res.body.id.startsWith('create:'));
      });
  });
  it('test update', () => {
    app.mockCsrf();
    return app.httpRequest()
      .put('/api/v1/test/123')
      .expect(204);
  });

  // it('test index error', () => {
  //   return app.httpRequest()
  //     .get('/api/v1/test?page=1&tab=test2&limit=1')
  //     .expect(200);
  // });
});
