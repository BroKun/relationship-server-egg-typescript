"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const egg_1 = require("egg");
const authorized_1 = require("../utils/authorized");
function isSigned(user) {
    return user && user._id.length > 0;
}
class Starring extends egg_1.Controller {
    /**
     * 点赞
     * POST /users/starred/:id
     */
    async create() {
        const { ctx, config } = this;
        const key = config.jwt.key;
        const stargazer = ctx.state[key];
        if (!isSigned(stargazer)) {
            ctx.throw(403, 'Sign Up First, Please');
        }
        else {
            const invalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
            if (invalid) {
                ctx.throw(400);
            }
            const starred = await ctx.model.User.findOne({ _id: ctx.params.id });
            if (!starred) {
                ctx.throw(404, 'User Not Found');
            }
            const starring = new ctx.model.Starring({
                stargazer: stargazer._id,
                stargazerOpenId: stargazer.openId,
                stargazerRealName: stargazer.realName,
                stargazerNickName: stargazer.nickName,
                stargazerAvatar: stargazer.avatar,
                starred: starred._id,
                starredOpenId: starred.openId,
                starredRealName: starred.realName,
                starredNickName: starred.nickName,
                starredAvatar: starred.avatar,
            });
            await starring.save();
            ctx.status = 204;
        }
    }
    /**
     * 取消赞
     * DELETE /users/starred/:userid
     */
    async destroy() {
        const { ctx } = this;
        ctx.throw(422, 'Unimplemented');
    }
    /**
     * 验证点赞关系
     * GET /user/:userid/starred/:otheruser
     */
    async check() {
        const { ctx } = this;
        ctx.throw(422, 'Unimplemented');
    }
    /**
     * 列举点过的赞
     * GET /user/:userid/starred?{page,per_page,order,sort}
     */
    async show() {
        const { ctx } = this;
        ctx.throw(422, 'Unimplemented');
    }
    /**
     * 列举被谁赞过
     * GET /user/:userid/stargazers?{page,per_page,order,sort}
     */
    async stargazers() {
        const { ctx } = this;
        ctx.throw(422, 'Unimplemented');
    }
}
tslib_1.__decorate([
    authorized_1.default,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Starring.prototype, "create", null);
tslib_1.__decorate([
    authorized_1.default,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Starring.prototype, "destroy", null);
exports.default = Starring;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFycmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBZ0Q7QUFFaEQsb0RBQTZDO0FBRTdDLGtCQUFrQixJQUFvQjtJQUNwQyxNQUFNLENBQUMsSUFBSSxJQUFLLElBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBRUQsY0FBOEIsU0FBUSxnQkFBVTtJQUM5Qzs7O09BR0c7SUFFSSxLQUFLLENBQUMsTUFBTTtRQUNqQixNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBWSxNQUF3QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDdEQsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1osR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDO1lBQ0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFDRCxNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2dCQUN0QyxTQUFTLEVBQUcsU0FBbUIsQ0FBQyxHQUFHO2dCQUNuQyxlQUFlLEVBQUcsU0FBbUIsQ0FBQyxNQUFNO2dCQUM1QyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsUUFBUTtnQkFDckMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLFFBQVE7Z0JBQ3JDLGVBQWUsRUFBRSxTQUFTLENBQUMsTUFBTTtnQkFDakMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHO2dCQUNwQixhQUFhLEVBQUUsT0FBTyxDQUFDLE1BQU07Z0JBQzdCLGVBQWUsRUFBRSxPQUFPLENBQUMsUUFBUTtnQkFDakMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2dCQUNqQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE1BQU07YUFDOUIsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbkIsQ0FBQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFFSSxLQUFLLENBQUMsT0FBTztRQUNsQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsS0FBSztRQUNoQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsSUFBSTtRQUNmLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDckIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxVQUFVO1FBQ3JCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDckIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBakVDO0lBREMsb0JBQVU7Ozs7c0NBK0JWO0FBT0Q7SUFEQyxvQkFBVTs7Ozt1Q0FJVjtBQTlDSCwyQkF1RUMifQ==