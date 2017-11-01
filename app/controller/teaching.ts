import { Controller } from 'egg';
import { isUser } from '../common/users.model';
import authorized from '../utils/authorized';
import cacheControl from '../utils/headers';

export default class Teaching extends Controller {
  /**
   * 建立师徒关系
   * POST /api/v1/user/teaching/:id
   */
  @authorized(isUser)
  @cacheControl()
  public async create() {
    const { ctx, config } = this;
    const stu: Relationship.User = ctx.state[config.jwt.key];
    const invalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
    if (invalid || stu._id.toString() === ctx.params.id) {
      ctx.throw(400);
    }

    const master = await ctx.model.User.findOne({ _id: ctx.params.id });
    if (!master) {
      ctx.throw(404, 'User Not Found');
    }
    const apprenticeIndex = master ? master.apprentices.findIndex((x) => x.toString() === ctx.params.apprentice) : -1;
    if (apprenticeIndex === -1) {
      master.apprentices.push(stu._id);
      await master.save();
    }
    ctx.status = 204;
  }

  /**
   * 删除师徒关系
   * DELETE /api/v1/user/teaching/:id
   */
  @authorized(isUser)
  @cacheControl()
  public async destroy() {
    const { ctx, config } = this;
    const stu: Relationship.User = ctx.state[config.jwt.key];
    const invalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
    if (invalid) {
      ctx.throw(400);
    }

    const master = await ctx.model.User.findOne({ _id: ctx.params.id });
    if (!master) {
      ctx.throw(404, 'User Not Found');
    }
    master.apprentices.forEach((val, idx, array) => {
      // val: 当前值
      // idx：当前index
      // array: Array
      if (val === stu._id) {
        array.splice(idx, 1);
      }
    });
    await master.save();
    ctx.status = 204;
  }

  /**
   * 验证师徒关系
   * GET /api/v1/users/:master/teaching/:apprentice
   */
  @cacheControl()
  public async check() {
    const { ctx } = this;
    const invalid = this.app.validator.validate({ master: 'ObjectId', apprentice: 'ObjectId' }, ctx.params);
    if (invalid) {
      ctx.throw(400);
    }
    const master = await ctx.model.User.findOne({ _id: ctx.params.master });
    const apprenticeIndex = master ? master.apprentices.findIndex((x) => x.toString() === ctx.params.apprentice) : -1;
    if (apprenticeIndex === -1) {
      ctx.throw(404);
    }
    ctx.status = 204;
  }
}
