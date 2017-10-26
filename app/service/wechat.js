"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const queryString = require("querystring");
// import { WXError, WXSessionRes } from 'Wechat';
const constant_1 = require("../utils/constant");
const httpUtil_1 = require("../utils/httpUtil");
/**
 * 微信服务
 * 提供基于微信API的服务
 */
class Wechat extends egg_1.Service {
    /**
     * 根据code换取微信session信息
     * @param code 从微信环境获取的编码字符串
     */
    async jscode2session(code) {
        const { config } = this;
        const params = {
            appid: config.wxapp.AppID,
            secret: config.wxapp.AppSecret,
            js_code: code,
            grant_type: 'authorization_code',
        };
        const ops = new httpUtil_1.ReqOps(constant_1.default.jscode2session.hostname, `${constant_1.default.jscode2session.path}?${queryString.stringify(params)}`);
        return JSON.parse(await httpUtil_1.https(ops));
    }
}
exports.default = Wechat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VjaGF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VjaGF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZDO0FBQzdDLDJDQUEyQztBQUMzQyxrREFBa0Q7QUFDbEQsZ0RBQXlDO0FBQ3pDLGdEQUFrRDtBQUVsRDs7O0dBR0c7QUFDSCxZQUE0QixTQUFRLGFBQU87SUFDekM7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFZO1FBQ3RDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDeEIsTUFBTSxNQUFNLEdBQUc7WUFDYixLQUFLLEVBQUcsTUFBd0IsQ0FBQyxLQUFLLENBQUMsS0FBSztZQUM1QyxNQUFNLEVBQUcsTUFBd0IsQ0FBQyxLQUFLLENBQUMsU0FBUztZQUNqRCxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxvQkFBb0I7U0FDakMsQ0FBQztRQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQU0sQ0FDcEIsa0JBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUNoQyxHQUFHLGtCQUFRLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGdCQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7QUFsQkQseUJBa0JDIn0=