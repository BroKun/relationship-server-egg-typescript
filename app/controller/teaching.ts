import { Controller } from 'egg';
import authorized from '../utils/authorized';

export default class Teaching extends Controller {
  /**
   * 建立师徒关系
   * POST /users/teaching/:userid
   */
  @authorized()
  public async create() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }

  /**
   * 删除师徒关系
   * DELETE /users/teaching/:userid
   */
  @authorized()
  public async destroy() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
  /**
   * 验证师徒关系
   * GET /user/:master/teaching/:apprentices
   */
  public async check() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
}
