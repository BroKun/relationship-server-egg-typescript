import * as mm from 'egg-mock';
import tokenGen from '../../utils/token';

describe('师徒关系', () => {
  const app = mm.app();

  before(async () => {
    await app.ready();
  });
  after(() => app.close());

  afterEach(mm.restore);

  describe('建立与取消师徒关系', () => {
    it('建立师徒关系', () => {
      return app.httpRequest()
        .post('/api/v1/user/teaching/59f1aa5c2fdb3d221426e2b9')
        .set('Authorization', `Bearer ${tokenGen(app)}`)
        .send({})
        .expect(204);
    });
    it('删除师徒关系', async () => {
      return app.httpRequest()
        .delete('/api/v1/user/teaching/59f1aa5c2fdb3d221426e2b9')
        .set('Authorization', `Bearer ${tokenGen(app)}`)
        .send({})
        .expect(204);
    });
  });

  it('查询正确的师徒关系', async () => {
    return app.httpRequest()
      .get('/api/v1/users/59f09727fa451437706901db/teaching/59f1cd15c4ba889296e3b596')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .send({})
      .expect(200)
      .expect(res => res.body == true);
  });

  it('查询错误的师徒关系', async () => {
    return app.httpRequest()
      .get('/api/v1/users/59f09727fa451437706901db/teaching/59f1ed8a323c981b08d25b63')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .send({})
      .expect(200)
      .expect(res => res.body == false);
  });
});
