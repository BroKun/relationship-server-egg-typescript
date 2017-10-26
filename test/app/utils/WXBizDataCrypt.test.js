"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const mm = require("egg-mock");
const WXBizDataCrypt_1 = require("../../../app/utils/WXBizDataCrypt");
describe('微信解密模块', () => {
    const app = mm.app();
    before(async () => {
        await app.ready();
    });
    after(() => app.close());
    afterEach(mm.restore);
    it('test index请求', () => {
        const dataObj = new WXBizDataCrypt_1.default(app.config.wxapp.AppID, app.config.wxapp.AppSecret);
        try {
            dataObj.decryptData('error data', '');
        }
        catch (ex) {
            assert(ex.message === 'Illegal Buffer');
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV1hCaXpEYXRhQ3J5cHQudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldYQml6RGF0YUNyeXB0LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBaUM7QUFFakMsK0JBQStCO0FBQy9CLHNFQUErRDtBQUMvRCxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUN0QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDckIsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2hCLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7UUFDdEIsTUFBTSxPQUFPLEdBQUcsSUFBSSx3QkFBYyxDQUMvQixHQUFHLENBQUMsTUFBeUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN6QyxHQUFHLENBQUMsTUFBeUIsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDO1lBQ0gsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWixNQUFNLENBQUUsRUFBWSxDQUFDLE9BQU8sS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=