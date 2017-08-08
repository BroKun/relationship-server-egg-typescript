'use strict';
import { Controller } from 'egg';

export default class TopicsController extends Controller {
    public async show() {
      const { ctx } = this;
      ctx.body = await ctx.service.test.show({
        id: ctx.params.id,
      });
    }

    public async index() {
      const { ctx } = this;
      this.app.validator.validate({
        page: { type: 'string', format: /\d+/, required: false },
        tab: { type: 'enum', values: [ 'test', 'test1' ], required: false },
        limit: { type: 'string', format: /\d+/, required: false },
      }, ctx.query);

      ctx.body = await ctx.service.test.list({
        page: ctx.query.page,
        tab: ctx.query.tab,
        limit: ctx.query.limit,
      });
    }

    public async create() {
      const { ctx } = this;
      const id = await ctx.service.test.create(ctx.request.body);
      ctx.body = {
        id,
      };
      ctx.status = 201;
    }

    public async update() {
      const { ctx } = this;
      const id = ctx.params.id;
      await ctx.service.test.update({ id, ...ctx.request.body});
      ctx.status = 204;
    }
}
