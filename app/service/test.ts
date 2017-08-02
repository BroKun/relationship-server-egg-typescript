'use strict';
import { Context, Service } from 'egg';

export default class HackerNews extends Service {
    public async show(params) {
      return `show:${params}`;
    }

    public async create(params) {
      return `create:${params.content}`;
    }

    public async update(params) {
      return `update:${params}`;
    }
    public async list(params) {
      return params;
    }
}
