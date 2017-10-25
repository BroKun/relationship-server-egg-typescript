import * as mm from 'egg-mock';
import * as uuid from 'uuid';
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

  it('成功创建User', () => {
    return app.httpRequest()
      .post('/api/v1/users')
      .set('Authorization', `Bearer ${token}`)
      .send({
        openId: uuid.v1(),
      })
      .expect(201);
  });
  it('重复的openId,无法创建新用户', () => {
    return app.httpRequest()
      .post('/api/v1/users')
      .set('Authorization', `Bearer ${token}`)
      .send({
        openId: '30624700',
      })
      .expect(500);
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
      .get('/api/v1/users/59f09727fa451437706901db')
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
});
