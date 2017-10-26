"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mm = require("egg-mock");
const token_1 = require("../../utils/token");
describe('师徒关系', () => {
    const app = mm.app();
    let token = '';
    before(async () => {
        await app.ready();
        token = token_1.default(app, '59e766cbd07ee90cb1b9817c');
    });
    after(() => app.close());
    afterEach(mm.restore);
    it('建立师徒关系', () => {
        return app.httpRequest()
            .post('/api/v1/users/teaching/59ea0940271de30cb5b79031')
            .set('Authorization', `Bearer ${token}`)
            .send({}) //_id: '59e766cbd07ee90cb1b9817c'
            .expect(204);
    });
    it('查询师徒关系', async () => {
        return app.httpRequest()
            .get('/user/59ea0940271de30cb5b79031/teaching/59e766cbd07ee90cb1b9817c')
            .set('Authorization', `Bearer ${token}`)
            .send({})
            .expect(200);
    });
    // it('删除师徒关系',async () => {
    //   return app.httpRequest()
    //     .delete('/api/v1/users/teaching/59ea0940271de30cb5b79031')
    //     .set('Authorization', `Bearer ${token}`)
    //     .send({}) //_id: '59e766cbd07ee90cb1b9817c'
    //     .expect(204);
    // });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hpbmcudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlYWNoaW5nLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsNkNBQXlDO0FBRXpDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUVyQixJQUFJLEtBQUssR0FBVyxFQUFFLENBQUM7SUFFdkIsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2hCLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLEtBQUssR0FBRyxlQUFRLENBQUMsR0FBRyxFQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDSCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFekIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV0QixFQUFFLENBQUMsUUFBUSxFQUFDLEdBQUcsRUFBRTtRQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO2FBQ3JCLElBQUksQ0FBQyxpREFBaUQsQ0FBQzthQUN2RCxHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVUsS0FBSyxFQUFFLENBQUM7YUFDdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlDQUFpQzthQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsUUFBUSxFQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO2FBQ3JCLEdBQUcsQ0FBQyxrRUFBa0UsQ0FBQzthQUN2RSxHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVUsS0FBSyxFQUFFLENBQUM7YUFDdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNSLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztJQUVILDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsaUVBQWlFO0lBQ2pFLCtDQUErQztJQUMvQyxrREFBa0Q7SUFDbEQsb0JBQW9CO0lBQ3BCLE1BQU07QUFDUixDQUFDLENBQUMsQ0FBQyJ9