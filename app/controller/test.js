'use strict';

module.exports = app => {
  class TopicsController extends app.Controller {

    async show() {
      const { ctx } = this;
      ctx.body = await ctx.service.test.show({
        id: ctx.params.id,
      });
    }

    async index() {
      const { ctx } = this;
      const queryRule = {
        page: { format: /\d+/, required: false },
        tab: { type: 'enum', values: [ 'test', 'test1' ], required: false },
        limit: { format: /\d+/, required: false },
      };
      ctx.validate(queryRule, ctx.query);

      ctx.body = await ctx.service.test.list({
        page: ctx.query.page,
        tab: ctx.query.tab,
        limit: ctx.query.limit,
      });
    }

    async create() {
      const { ctx } = this;
      const id = await ctx.service.test.create(ctx.request.body);
      ctx.body = {
        id,
      };
      ctx.status = 201;
    }

    async update() {
      const { ctx } = this;
      const id = ctx.params.id;
      await ctx.service.test.update(Object.assign({ id }, ctx.request.body));
      ctx.status = 204;
    }
  }

  return TopicsController;
};
