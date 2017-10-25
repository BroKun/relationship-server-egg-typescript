import { Controller, DefaultConfig } from 'egg';
import { isUser } from '../common/users.model';
import authorized from '../utils/authorized';

export default class Starring extends Controller {
  /**
   * 点赞
   * POST /users/starred/:id
   */
  @authorized(isUser)
  public async create() {
    const { ctx, config } = this;
    const stargazer = ctx.state[(config as DefaultConfig).jwt.key];
    const invalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
    if (invalid) {
      ctx.throw(400);
    }
    const starred = await ctx.model.User.findOne({ _id: ctx.params.id });
    if (!starred) {
      ctx.throw(404, 'User Not Found');
    }
    const starring = new ctx.model.Starring({
      stargazer: (stargazer as Relationship.User)._id,
      stargazerOpenId: (stargazer as Relationship.User).openId,
      stargazerRealName: (stargazer as Relationship.User).realName,
      stargazerNickName: (stargazer as Relationship.User).nickName,
      stargazerAvatar: (stargazer as Relationship.User).avatar,
      starred: starred._id,
      starredOpenId: starred.openId,
      starredRealName: starred.realName,
      starredNickName: starred.nickName,
      starredAvatar: starred.avatar,
    });
    await starring.save();
    ctx.status = 204;
  }

  /**
   * 取消赞
   * DELETE /users/starred/:userid
   */
  @authorized(isUser)
  public async destroy() {
    const { ctx, config } = this;
    const user = ctx.state[(config as DefaultConfig).jwt.key];
    await ctx.model.Starring.remove({ stargazer: (user as Relationship.User)._id, starred: ctx.params.id });
    ctx.status = 204;
  }
  /**
   * 验证点赞关系
   * GET /user/:userid/starred/:otheruser
   */
  public async check() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
  /**
   * 列举点过的赞
   * GET /user/:userid/starred?{page,per_page,order,sort}
   */
  public async show() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
  /**
   * 列举被谁赞过
   * GET /user/:userid/stargazers?{page,per_page,order,sort}
   */
  public async stargazers() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
}
