import { Controller, DefaultConfig } from 'egg';
import { IUser } from '../common/user.model';
import authorized from '../utils/authorized';

function isSigned(user: IUser | object): user is IUser {
  return user && (user as IUser)._id.length > 0;
}

export default class Starring extends Controller {
  /**
   * 点赞
   * POST /users/starred/:id
   */
  @authorized
  public async create() {
    const { ctx, config } = this;
    const key: string = (config as DefaultConfig).jwt.key;
    const stargazer = ctx.state[key];
    if (!isSigned(stargazer)) {
      ctx.throw(403, 'Sign Up First, Please');
    } else {
      const invalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
      if (invalid) {
        ctx.throw(400);
      }
      const starred = await ctx.model.User.findOne({ _id: ctx.params.id });
      if (!starred) {
        ctx.throw(404, 'User Not Found');
      }
      const starring = new ctx.model.Starring({
        stargazer: (stargazer as IUser)._id,
        stargazerOpenId: (stargazer as IUser).openId,
        stargazerRealName: stargazer.realName,
        stargazerNickName: stargazer.nickName,
        stargazerAvatar: stargazer.avatar,
        starred: starred._id,
        starredOpenId: starred.openId,
        starredRealName: starred.realName,
        starredNickName: starred.nickName,
        starredAvatar: starred.avatar,
      });
      await starring.save();
      ctx.status = 204;
    }
  }

  /**
   * 取消赞
   * DELETE /users/starred/:userid
   */
  @authorized
  public async destroy() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
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
