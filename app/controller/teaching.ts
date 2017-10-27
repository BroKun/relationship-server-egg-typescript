import { Controller } from 'egg';
import authorized from '../utils/authorized';

export default class Teaching extends Controller {
  /**
   * 建立师徒关系
   * POST /api/v1/api/v1/user/teaching/:id
   */
  @authorized()
  public async create() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }

  /**
   * 删除师徒关系
   * DELETE /api/v1/api/v1/user/teaching/:id
   */
  @authorized()
  public async destroy() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
  /**
   * 验证师徒关系
   * GET /api/v1/users/:master/teaching/:apprentices
   */
  public async check() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
}
