import { Controller } from 'egg';
import authorized from '../utils/authorized';

export default class Starring extends Controller {
  /**
   * 点赞
   * POST /users/starred/:userid
   */
  @authorized
  public async create() {
    const { ctx } = this;
    ctx.throw(422, 'Unimplemented');
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
