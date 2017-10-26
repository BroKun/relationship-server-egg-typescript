"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class Apprentices extends egg_1.Controller {
    /**
     * 徒弟列表
     * GET /user/:userid/apprentices
     */
    async index() {
        const { ctx } = this;
        const invalid = this.app.validator.validate({ id: 'ObjectId' }, ctx.params);
        if (invalid) {
            ctx.throw(400);
        }
        const user = await ctx.model.User.findOne({ _id: ctx.params.id });
        if (!user) {
            ctx.throw(404, 'User Not Found');
        }
        const apprentices = user.apprentices;
        ctx.body = apprentices;
        ctx.status = 200;
    }
}
exports.default = Apprentices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcmVudGljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHByZW50aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUcvQixpQkFBaUMsU0FBUSxnQkFBVTtJQUNqRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsS0FBSztRQUNoQixNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNaLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQztRQUNELE1BQU0sSUFBSSxHQUFTLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQXBCRCw4QkFvQkMifQ==