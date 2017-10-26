import * as mm from 'egg-mock';
import tokenGen from '../../utils/token';
describe('徒弟管理', () => {
  const app = mm.app();

  let token: string = '';

  before(async () => {
    await app.ready();
    token = tokenGen(app);
  });
  after(() => app.close());

  afterEach(mm.restore);

  it('获取徒弟列表',async () => {
     const ctx = app.mockContext();
     ctx.state['user'] = await ctx.model.User.findOne({ "_id" : "59e766cbd07ee90cb1b9817c" });
     await app.httpRequest()
      .post('/api/v1/users/teaching/59ea0940271de30cb5b79031')
      .set('Authorization', `Bearer ${token}`)
      .send({
      });
     const res = await app.httpRequest()
      .get('/user/59ea0940271de30cb5b79031/apprentices')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
     await app.httpRequest()
      .delete('/api/v1/users/teaching/59ea0940271de30cb5b79031')
      .set('Authorization', `Bearer ${token}`)
      .send({
      })
    return res;
  });

});
