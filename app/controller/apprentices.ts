import { Controller } from 'egg';

export default class Apprentices extends Controller {
  /**
   * 徒弟列表
   * GET /api/v1/users/:id/apprentices
   */
  public async index() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
}
