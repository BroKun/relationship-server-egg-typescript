import mm from 'egg-mock';
import tokenGen from '../../utils/token';

describe('师傅查询', () => {
  const app = mm.app();

  before(async () => {
    await app.ready();
  });
  after(() => app.close());

  afterEach(mm.restore);

  it('获取师傅', async () => {
    await app.httpRequest()
      .get('/api/v1/users/59f1cd15c4ba889296e3b596/masters')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .send({}).expect(200);
  });

});
