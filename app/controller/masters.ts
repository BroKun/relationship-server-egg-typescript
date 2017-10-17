import { Controller } from 'egg';

export default class Masters extends Controller {
  /**
   * 师傅列表
   * GET /user/:userid/masters
   */
  public async index() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
}
