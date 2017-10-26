"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const jwt = require("jsonwebtoken");
const moment = require("moment");
class Tokens extends egg_1.Controller {
    /**
     * 登录获取openid,unionid与token
     */
    async create() {
        const { ctx, config } = this;
        const wxRes = await ctx.service.wechat.jscode2session(ctx.request.body['code']);
        if (wxRes.errcode) {
            ctx.throw(422, { errors: wxRes });
        }
        const exp = moment().add(30, 'days').unix();
        const token = jwt.sign(Object.assign({}, wxRes, { exp }), config.jwt.secret);
        const res = {
            token,
            openid: wxRes.openid,
            unionid: wxRes.unionid,
        };
        ctx.body = res;
        ctx.status = 201;
    }
}
exports.default = Tokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQWdEO0FBQ2hELG9DQUFvQztBQUNwQyxpQ0FBaUM7QUFPakMsWUFBNEIsU0FBUSxnQkFBVTtJQUM1Qzs7T0FFRztJQUNJLEtBQUssQ0FBQyxNQUFNO1FBQ2pCLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEYsRUFBRSxDQUFDLENBQUUsS0FBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDckUsTUFBTSxHQUFHLEdBQVcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwRCxNQUFNLEtBQUssR0FBVyxHQUFHLENBQUMsSUFBSSxtQkFBTSxLQUFLLElBQUUsR0FBRyxLQUFLLE1BQXdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hGLE1BQU0sR0FBRyxHQUFnQjtZQUN2QixLQUFLO1lBQ0wsTUFBTSxFQUFHLEtBQW9CLENBQUMsTUFBTTtZQUNwQyxPQUFPLEVBQUcsS0FBb0IsQ0FBQyxPQUFPO1NBQ3ZDLENBQUM7UUFDRixHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNmLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQWxCRCx5QkFrQkMifQ==