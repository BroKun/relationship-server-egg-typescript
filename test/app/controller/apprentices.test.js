"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mm = require("egg-mock");
const token_1 = require("../../utils/token");
describe('徒弟管理', () => {
    const app = mm.app();
    let token = '';
    before(async () => {
        await app.ready();
        token = token_1.default(app);
    });
    after(() => app.close());
    afterEach(mm.restore);
    it('获取徒弟列表', async () => {
        const ctx = app.mockContext();
        ctx.state['user'] = await ctx.model.User.findOne({ "_id": "59e766cbd07ee90cb1b9817c" });
        await app.httpRequest()
            .post('/api/v1/users/teaching/59ea0940271de30cb5b79031')
            .set('Authorization', `Bearer ${token}`)
            .send({});
        const res = await app.httpRequest()
            .get('/user/59ea0940271de30cb5b79031/apprentices')
            .set('Authorization', `Bearer ${token}`)
            .expect(200);
        await app.httpRequest()
            .delete('/api/v1/users/teaching/59ea0940271de30cb5b79031')
            .set('Authorization', `Bearer ${token}`)
            .send({});
        return res;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcmVudGljZXMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcHJlbnRpY2VzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsNkNBQXlDO0FBQ3pDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUVyQixJQUFJLEtBQUssR0FBVyxFQUFFLENBQUM7SUFFdkIsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2hCLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLEtBQUssR0FBRyxlQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFekIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV0QixFQUFFLENBQUMsUUFBUSxFQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3BCLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFHLDBCQUEwQixFQUFFLENBQUMsQ0FBQztRQUN6RixNQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUU7YUFDckIsSUFBSSxDQUFDLGlEQUFpRCxDQUFDO2FBQ3ZELEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxLQUFLLEVBQUUsQ0FBQzthQUN2QyxJQUFJLENBQUMsRUFDTCxDQUFDLENBQUM7UUFDSixNQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUU7YUFDakMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDO2FBQ2pELEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxLQUFLLEVBQUUsQ0FBQzthQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxNQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUU7YUFDckIsTUFBTSxDQUFDLGlEQUFpRCxDQUFDO2FBQ3pELEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxLQUFLLEVBQUUsQ0FBQzthQUN2QyxJQUFJLENBQUMsRUFDTCxDQUFDLENBQUE7UUFDSixNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyJ9