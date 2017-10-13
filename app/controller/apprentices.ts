import { Controller } from 'egg';

export default class Apprentices extends Controller {
  /**
   * 徒弟列表
   * GET /user/:userid/apprentices
   */
  public async index() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
  }
}
