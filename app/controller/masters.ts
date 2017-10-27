import { Controller } from 'egg';

export default class Masters extends Controller {
  /**
   * 师傅列表
   * GET /api/v1/users/:id/masters
   */
  public async index() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
}
