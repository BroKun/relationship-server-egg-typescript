"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBOEI7QUFFOUIsaUJBQWlDLFNBQVEsYUFBTztJQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU07UUFDdEIsTUFBTSxDQUFDLFFBQVEsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTtRQUN4QixNQUFNLENBQUMsVUFBVSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTtRQUN4QixNQUFNLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ00sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNO1FBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBZkQsOEJBZUMifQ==