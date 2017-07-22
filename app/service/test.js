'use strict';

module.exports = app => {
  class TopicService extends app.Service {

    async show(params) {
      return `show:${params}`;
    }

    async create(params) {
      return `create:${params.content}`;
    }

    async update(params) {
      return `update:${params}`;
    }
    async list(params) {
      return params;
    }
  }

  return TopicService;
};
