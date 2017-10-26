"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const egg_1 = require("egg");
const authorized_1 = require("../utils/authorized");
/**
 * 用户信息校验
 */
const userValidationRule = {
    openId: 'string',
    unionId: {
        type: 'string',
        required: false,
    },
    realName: {
        type: 'string',
        required: false,
    },
    nickName: {
        type: 'string',
    },
    enrollmentYear: {
        type: 'int',
        min: 1990,
        max: 2050,
        required: false,
    },
    major: {
        type: 'string',
        required: false,
    },
    bio: {
        type: 'string',
        required: false,
    },
    avatar: {
        type: 'string',
        required: false,
    },
};
class Users extends egg_1.Controller {
    /**
     * 创建新用户
     * POST /users
     */
    async create() {
        const { ctx } = this;
        const invalid = this.app.validator.validate(userValidationRule, ctx.request.body);
        if (invalid) {
            ctx.throw(400);
        }
        const user = new ctx.model.User(ctx.request.body);
        const savedUser = await user.save();
        ctx.body = savedUser;
        ctx.status = 201;
    }
    /**
     * 获取用户信息
     * GET /users/:userid
     */
    async show() {
        const { ctx } = this;
        const invalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
        if (invalid) {
            ctx.throw(400);
        }
        const user = await ctx.model.User.findOne({ _id: ctx.params.id });
        if (!user) {
            ctx.throw(404);
        }
        ctx.body = user;
        ctx.status = 200;
    }
    /**
     * 修改用户信息
     * PUT /users/:userid
     */
    async update() {
        const { ctx } = this;
        const invalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
        if (invalid) {
            ctx.throw(400);
        }
        const conditions = { _id: ctx.params.id };
        const update = { $set: ctx.request.body };
        await ctx.model.User.update(conditions, update, {});
        ctx.status = 204;
    }
    /**
     * 列举用户信息
     * GET /users{?page,per_page,order,sort,member,enrollmentYear,nickName,major}
     */
    async index() {
        const { ctx } = this;
        const page = ctx.query.page;
        const per_page = ctx.query.per_page;
        const order = ctx.query.order;
        const sort = ctx.query.sort;
        const member = ctx.query.member;
        const enrollmentYear = ctx.query.enrollmentYear;
        const nickName = ctx.query.nickName;
        const major = ctx.query.major;
        const conditions = { member: member }; // 查询条件
        if (enrollmentYear)
            conditions['enrollmentYear'] = enrollmentYear;
        if (nickName)
            conditions['nickName'] = nickName;
        if (major)
            conditions['major'] = major;
        const users = await ctx.model.User.find(conditions)
            .sort(order == '1' ? '' : '-' + `${sort}`)
            .skip((page - 1) * per_page)
            .limit(per_page);
        ctx.body = users;
        ctx.status = 200;
    }
}
tslib_1.__decorate([
    authorized_1.default,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Users.prototype, "create", null);
tslib_1.__decorate([
    authorized_1.default,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Users.prototype, "update", null);
exports.default = Users;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBK0I7QUFDL0Isb0RBQTZDO0FBRTdDOztHQUVHO0FBQ0gsTUFBTSxrQkFBa0IsR0FBRztJQUN6QixNQUFNLEVBQUUsUUFBUTtJQUNoQixPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLFFBQVE7UUFDZCxRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxRQUFRO0tBQ2Y7SUFDRCxjQUFjLEVBQUU7UUFDZCxJQUFJLEVBQUUsS0FBSztRQUNYLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxRQUFRO1FBQ2QsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsUUFBUTtRQUNkLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxRQUFRLEVBQUUsS0FBSztLQUNoQjtDQUNGLENBQUM7QUFDRixXQUEyQixTQUFRLGdCQUFVO0lBQzNDOzs7T0FHRztJQUVJLEtBQUssQ0FBQyxNQUFNO1FBQ2pCLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxJQUFJLENBQUM7UUFDbkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEYsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNaLEdBQUcsQ0FBQyxLQUFLLENB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