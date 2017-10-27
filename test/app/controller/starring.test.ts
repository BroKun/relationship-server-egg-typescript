import * as assert from 'assert';
import * as mm from 'egg-mock';
import tokenGen from '../../utils/token';
describe('User管理', () => {
  const app = mm.app();
  before(async () => {
    await app.ready();
  });
  after(() => app.close());

  afterEach(mm.restore);
  describe('点赞与取消赞', () => {
    it('点赞', () => {
      return app.httpRequest()
        .post('/api/v1/user/starred/59f1aa5c2fdb3d221426e2b9')
        .set('Authorization', `Bearer ${tokenGen(app)}`)
        .expect(204);
    });
    it('取消赞', () => {
      return app.httpRequest()
        .delete('/api/v1/user/starred/59f1aa5c2fdb3d221426e2b9')
        .set('Authorization', `Bearer ${tokenGen(app)}`)
        .expect(204);
    });
  });
  it('被赞用户id错误', () => {
    return app.httpRequest()
      .post('/api/v1/user/starred/123456')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .expect(400);
  });
  it('找不到被赞的用户', () => {
    return app.httpRequest()
      .post('/api/v1/user/starred/111111111111111111111111')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .expect(404);
  });
  it('验证点赞关系-成功', () => {
    return app.httpRequest()
      .get('/api/v1/users/59f09727fa451437706901db/starred/59f1cd15c4ba889296e3b596')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .expect(204);
  });
  it('验证点赞关系-失败', () => {
    return app.httpRequest()
      .get('/api/v1/users/59f09727fa451437706901db/starred/111111111111111111111111')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .expect(404);
  });
  it('验证异常id点赞关系-失败', () => {
    return app.httpRequest()
      .get('/api/v1/users/123456/starred/59f1cd15c4ba889296e3b596')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .expect(400);
  });
  it('普通用户列举指定id赞过的人', () => {
    return app.httpRequest()
      .get('/api/v1/users/59f09727fa451437706901db/starred')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .expect(200)
      .expect((res) => {
        assert((res.body[0] as Relationship.User).nickName);
        assert(!(res.body[0] as Relationship.User).realName);
      });
  });
  it('列举无效的id赞过的人', () => {
    return app.httpRequest()
      .get('/api/v1/users/123456/starred')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .expect(400);
  });
  it('正式列举指定id赞过的人', () => {
    return app.httpRequest()
      .get('/api/v1/users/59f09727fa451437706901db/starred')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .set('Authorization', `Bearer ${tokenGen(app, {
        _id: '59f1cd15c4ba889296e3b596',
        openid: '30624770',
        session_key: '',
        unionid: '',
        openId: '30624770',
        type: 1,
      })}`)
      .expect((res) => {
        assert((res.body[0] as Relationship.User).nickName);
        assert((res.body[0] as Relationship.User).realName);
      });
  });
  it('普通用户列举指定id赞自己的人', () => {
    return app.httpRequest()
      .get('/api/v1/users/59f09727fa451437706901db/stargazers')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .expect(200)
      .expect((res) => {
        assert((res.body[0] as Relationship.User).nickName);
        assert(!(res.body[0] as Relationship.User).realName);
      });
  });
  it('列举无效的id赞自己的人', () => {
    return app.httpRequest()
      .get('/api/v1/users/123456/stargazers')
      .set('Authorization', `Bearer ${tokenGen(app)}`)
      .expect(400);
  });
  it('正式用户列举指定id赞自己的人', () => {
    return app.httpRequest()
      .get('/api/v1/users/59f09727fa451437706901db/stargazers')
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
        assert((res.body[0] as Relationship.User).nickName);
        assert((res.body[0] as Relationship.User).realName);
      });
  });
});
