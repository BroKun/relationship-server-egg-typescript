import * as assert from 'assert';
import mm from 'egg-mock';
import * as uuid from 'uuid';
import tokenGen from '../../utils/token';

describe('User管理', () => {
  let app;
  const openId = uuid.v1();
  before(async () => {
    app = mm.app();
    await app.ready();
  });
  after(async () => {
    const ctx = app.mockContext();
    await ctx.model.User.remove({ openId });
    await app.close();
  });

  afterEach(mm.restore);

  it('成功创建User', () => {
    return app.httpRequest()
      .post('/api/v1/users')
      .set('Authorization', `Bearer ${tokenGen(app)}`).set('Accept', 'application/json')
      .send({
        openId,
      })
      .expect(201);
  });
  it('重复的openId,无法创建新用户', () => {
    return app.httpRequest()
      .post('/api/v1/users')
      .set('Authorization', `Bearer ${tokenGen(app)}`).set('Accept', 'application/json')
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
      .set('Authorization', `Bearer ${tokenGen(app)}`).set('Accept', 'application/json')
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
  it('非正式成员不能获得完整用户信息', () => {
    return app.httpRequest()
      .get('/api/v1/users/59f1cd15c4ba889296e3b596')
      .set('Authorization', `Bearer ${tokenGen(app)}`).set('Accept', 'application/json')
      .expect(200)
      .expect((res) => {
        assert((res.body as Relationship.User).nickName);
        assert(!(res.body as Relationship.User).realName);
      });
  });
  it('非正式成员可以查询到自己的完整信息', () => {
    return app.httpRequest()
      .get('/api/v1/users/59f09727fa451437706901db')
      .set('Authorization', `Bearer ${tokenGen(app)}`).set('Accept', 'application/json')
      .expect(200)
      .expect((res) => {
        assert((res.body as Relationship.User).nickName);
        assert((res.body as Relationship.User).realName);
      });
  });
  it('正式成员可以查询到用户的完整信息', () => {
    return app.httpRequest()
      .get('/api/v1/users/59f09727fa451437706901db')
      .set('Authorization', `Bearer ${tokenGen(app, {
        _id: '59f1cd15c4ba889296e3b596',
        openid: '30624770',
        session_key: '',
        unionid: '',
        openId: '30624770',
        type: 1,
      })}`)
      .expect(200)
      .expect((res) => {
        assert((res.body as Relationship.User).nickName);
        assert((res.body as Relationship.User).realName);
      });
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
      .put('/api/v1/users/59f09727fa451437706901db')
      .set('Authorization', `Bearer ${tokenGen(app)}`).set('Accept', 'application/json')
      .send({
        nickName: '阿san',
        enrollmentYear: 2012,
      })
      .expect(204);
  });

  it('请求User列表', () => {
    return app.httpRequest()
      .get('/api/v1/users')
      .expect(200);
  });
});
