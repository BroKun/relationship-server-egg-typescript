"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const moment = require("moment");
function default_1(app, id = '') {
    const exp = moment().add(30, 'days').unix();
    const tokenInfo = {
        _id: id,
        openid: '',
        session_key: '',
        unionid: '',
        exp,
    };
    const token = jwt.sign(tokenInfo, app.config.jwt.secret);
    return token;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG9DQUFvQztBQUNwQyxpQ0FBaUM7QUFFakMsbUJBQXlCLEdBQWdCLEVBQUUsS0FBYSxFQUFFO0lBQ3hELE1BQU0sR0FBRyxHQUFXLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEQsTUFBTSxTQUFTLEdBQUc7UUFDaEIsR0FBRyxFQUFFLEVBQUU7UUFDUCxNQUFNLEVBQUUsRUFBRTtRQUNWLFdBQVcsRUFBRSxFQUFFO1FBQ2YsT0FBTyxFQUFFLEVBQUU7UUFDWCxHQUFHO0tBQ0osQ0FBQztJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFHLEdBQUcsQ0FBQyxNQUF3QixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RSxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVhELDRCQVdDIn0=