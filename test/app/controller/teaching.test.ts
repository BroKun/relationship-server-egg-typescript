import * as mm from 'egg-mock';
import tokenGen from '../../utils/token';

describe('师徒关系', () => {
  const app = mm.app();

  before(async () => {
    await app.ready();
  });
  after(() => app.close());

  afterEach(mm.restore);

  it('建立师徒关系',() => {
    return app.httpRequest()
      .post('/api/v1/users/teaching/59ea0940271de30cb5b79031')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .send({}) //_id: '59e766cbd07ee90cb1b9817c'
      .expect(204);
  });

  it('查询师徒关系',async () => {
    return app.httpRequest()
      .get('/user/59ea0940271de30cb5b79031/teaching/59e766cbd07ee90cb1b9817c')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .send({})
      .expect(200);
  });

  it('删除师徒关系',async () => {
    return app.httpRequest()
      .delete('/api/v1/users/teaching/59ea0940271de30cb5b79031')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .send({})
      .expect(204);
  });
});
