"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by sun48 on 2017/10/3.
 */
const assert = require("assert");
const httpUtil_1 = require("../../../app/utils/httpUtil");
describe('httpUtil工具测试', () => {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Content-Length': 0,
    };
    it('test http请求', async () => {
        const ops = new httpUtil_1.ReqOps(`jsonplaceholder.typicode.com`, `/posts/1`, `GET`, 80, headers);
        const res = JSON.parse(await httpUtil_1.http(ops));
        assert(res.id === 1);
    });
    it('test错误的http请求', async () => {
        const ops = new httpUtil_1.ReqOps(`jsonplaceholder.typicode.com`, `/user`, `GET`, 80, headers);
        const res = await httpUtil_1.http(ops);
        assert(res === '{}');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFV0aWwudGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwVXRpbC50ZXN0MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsaUNBQWlDO0FBQ2pDLDBEQUEyRDtBQUUzRCxRQUFRLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtJQUM1QixNQUFNLE9BQU8sR0FBRztRQUNkLGNBQWMsRUFBRSxrREFBa0Q7UUFDbEUsZ0JBQWdCLEVBQUUsQ0FBQztLQUNwQixDQUFDO0lBQ0YsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLElBQUksRUFBRTtRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFNLENBQ3BCLDhCQUE4QixFQUM5QixVQUFVLEVBQ1YsS0FBSyxFQUNMLEVBQUUsRUFDRixPQUFPLENBQ1IsQ0FBQztRQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxlQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxpQkFBTSxDQUNwQiw4QkFBOEIsRUFDOUIsT0FBTyxFQUNQLEtBQUssRUFDTCxFQUFFLEVBQ0YsT0FBTyxDQUNSLENBQUM7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLGVBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==