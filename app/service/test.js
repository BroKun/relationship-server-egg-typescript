'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const egg_1 = require('egg');
class TestService extends egg_1.Service {
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
exports.default = TestService;
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLDZCQUE4QjtBQUU5QixpQkFBaUMsU0FBUSxhQUFPO0lBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTtRQUN0QixNQUFNLENBQUMsUUFBUSxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQ3hCLE1BQU0sQ0FBQyxVQUFVLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQ3hCLE1BQU0sQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDTSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU07UUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUFmRCw4QkFlQyJ9
