import * as mm from 'egg-mock';
import tokenGen from '../../utils/token';
describe('User管理', () => {
  const app = mm.app();

  let token: string = '';

  before(async () => {
    await app.ready();
    token = tokenGen(app);
  });
  after(() => app.close());

  afterEach(mm.restore);

  it('真实请求,创建User', () => {
    return app.httpRequest()
      .post('/api/v1/users')
      .set('Authorization', `Bearer ${token}`)
      .send({
        realName: '张三',
        nickName: '阿三',
        enrollmentYear: 2001,
        openId: '11111',
      })
      .expect(201);
  });

  it('未授权的请求', () => {
    return app.httpRequest()
      .post('/api/v1/users')
      .send({
        realName: '张三',
        nickName: '阿三',
        enrollmentYear: 2001,
        openId: '11111',
      })
      .expect(401);
  });

  it('数据验证失败', () => {
    return app.httpRequest()
      .post('/api/v1/users')
      .set('Authorization', `Bearer ${token}`)
      .send({
        realName: '张三',
        nickName: '阿三',
        enrollmentYear: 2061,
        openId: '11111',
      })
      .expect(400);
  });

  it('请求单一User', () => {
    return app.httpRequest()
      .get('/api/v1/users/59c872ee9639dd1078ceb19e')
      .expect(200);
  });
  it('格式错误的UserId', () => {
    return app.httpRequest()
      .get('/api/v1/users/123456')
      .expect(400);
  });
  it('请求不存在的User', () => {
    return app.httpRequest()
      .get('/api/v1/users/111111111111111111111111')
      .expect(404);
  });


  it('更改User', () => {
    return app.httpRequest()
      .put('/api/v1/users/59ea0940271de30cb5b79031')
      .set('Authorization', `Bearer ${token}`)
      .send({
        realName: '张er',
        nickName: '阿san',
        enrollmentYear: 2001,
        openId: '22222',
      })
      .expect(204);
  });

  it('请求User列表', () => {
    return app.httpRequest()
      .get('/api/v1/users')
      .expect(200);
  });
});
