import { Controller, DefaultConfig } from 'egg';
import { defaultQuery, pagedQuery, queryValidationRule } from '../common/query.model';
import { isRegular, isUser, userBaseSelect, userRegularSelect } from '../common/users.model';
import authorized from '../utils/authorized';
import cacheControl from '../utils/headers';

export default class Starring extends Controller {
  /**
   * 点赞
   * POST /api/v1/user/starred/:id
   */
  @authorized(isUser)
  @cacheControl()
  public async create() {
    const { ctx, config } = this;
    const stargazer: Relationship.User = ctx.state[(config as DefaultConfig).jwt.key];
    const invalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
    if (invalid) {
      ctx.throw(400);
    }
    const starred = await ctx.model.User.findOne({ _id: ctx.params.id });
    if (!starred) {
      ctx.throw(404, 'User Not Found');
    }
    const starring = new ctx.model.Starring({
      stargazer: stargazer._id,
      starred: starred._id,
    });
    await starring.save();
    ctx.status = 204;
  }

  /**
   * 取消赞
   * DELETE /api/v1/user/starred/:id
   */
  @authorized(isUser)
  @cacheControl()
  public async destroy() {
    const { ctx, config } = this;
    const user = ctx.state[(config as DefaultConfig).jwt.key];
    await ctx.model.Starring.remove({ stargazer: (user as Relationship.User)._id, starred: ctx.params.id });
    ctx.status = 204;
  }
  /**
   * 验证点赞关系
   * GET /api/v1/users/:stargazer/starred/:starred
   */
  @cacheControl('public, max-age=0')
  public async check() {
    const { ctx } = this;
    const idInvalid = this.app.validator.validate({ stargazer: 'ObjectId', starred: 'ObjectId' }, ctx.params);
    if (idInvalid) {
      ctx.throw(400);
    }
    const starring = await ctx.model.Starring.findOne({ stargazer: ctx.params.stargazer, starred: ctx.params.starred });
    if (!starring) {
      ctx.throw(404);
    }
    const etag = starring.etag();
    ctx.set('etag', `"${etag}"`);
    ctx.status = 204;
  }
  /**
   * 列举点过的赞
   * GET /api/v1/users/:id/starred?{page,per_page,order,sort}
   */
  @cacheControl('public, max-age=60')
  public async show() {
    const { app, ctx, config } = this;
    const idInvalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
    if (idInvalid) {
      ctx.throw(400);
    }
    let listQuery = ctx.model.Starring.find({ stargazer: ctx.params.id });
    const queriesInvalid = app.validator.validate(queryValidationRule, ctx.queries);
    const queries: Relationship.Query = queriesInvalid ? defaultQuery() : ctx.queries;
    listQuery = pagedQuery(listQuery, queries);
    const tokenInfo = ctx.state[(config as DefaultConfig).jwt.key];
    const isRegularUser = isRegular(tokenInfo);
    const starringList = await listQuery.populate({
      path: 'starred',
      select: isRegularUser ? userRegularSelect() : userBaseSelect(),
    });
    ctx.body = starringList.map((element) => {
      return element.starred;
    });
    const etag = ctx.model.Starring.listEtag(starringList, isRegularUser.toString());
    ctx.set('etag', `"${etag}"`);
    ctx.status = 200;
  }
  /**
   * 列举被谁赞过
   * GET /api/v1/users/:id/stargazers?{page,per_page,order,sort}
   */
  @cacheControl('public, max-age=0')
  public async stargazers() {
    const { app, ctx, config } = this;
    const idInvalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
    if (idInvalid) {
      ctx.throw(400);
    }
    let listQuery = ctx.model.Starring.find({ stargazer: ctx.params.id });
    const queriesInvalid = app.validator.validate(queryValidationRule, ctx.queries);
    const queries: Relationship.Query = queriesInvalid ? defaultQuery() : ctx.queries;
    listQuery = pagedQuery(listQuery, queries);
    const tokenInfo = ctx.state[(config as DefaultConfig).jwt.key];
    const isRegularUser = isRegular(tokenInfo);
    const starringList = await listQuery.populate({
      path: 'stargazer',
      select: isRegularUser ? userRegularSelect() : userBaseSelect(),
    });
    ctx.body = starringList.map((element) => {
      return element.stargazer;
    });
    const etag = ctx.model.Starring.listEtag(starringList, isRegularUser.toString());
    ctx.set('etag', `"${etag}"`);
    ctx.status = 200;
  }
}
