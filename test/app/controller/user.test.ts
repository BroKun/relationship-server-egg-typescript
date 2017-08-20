import * as assert from 'assert';
import * as mm from 'egg-mock';

describe('controller/user.js', () => {
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
      .get('/user/token?code=1')
      .expect(200);
  });
});
