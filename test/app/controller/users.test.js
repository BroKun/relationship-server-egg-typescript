"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mm = require("egg-mock");
const token_1 = require("../../utils/token");
describe('User管理', () => {
    const app = mm.app();
    let token = '';
    before(async () => {
        await app.ready();
        token = token_1.default(app);
    });
    after(() => app.close());
    afterEach(mm.restore);
    it('真实请求,创建User', () => {
        return app.httpRequest()
            .post('/api/v1/users')
            .set('Authorization', `Bearer ${token}`)
            .send({
            realName: '张三',
            nickName: '阿三',
            enrollmentYear: 2001,
            openId: '11111',
        })
            .expect(201);
    });
    it('未授权的请求', () => {
        return app.httpRequest()
            .post('/api/v1/users')
            .send({
            realName: '张三',
            nickName: '阿三',
            enrollmentYear: 2001,
            openId: '11111',
        })
            .expect(401);
    });
    it('数据验证失败', () => {
        return app.httpRequest()
            .post('/api/v1/users')
            .set('Authorization', `Bearer ${token}`)
            .send({
            realName: '张三',
            nickName: '阿三',
            enrollmentYear: 2061,
            openId: '11111',
        })
            .expect(400);
    });
    it('请求单一User', () => {
        return app.httpRequest()
            .get('/api/v1/users/59c872ee9639dd1078ceb19e')
            .expect(200);
    });
    it('格式错误的UserId', () => {
        return app.httpRequest()
            .get('/api/v1/users/123456')
            .expect(400);
    });
    it('请求不存在的User', () => {
        return app.httpRequest()
            .get('/api/v1/users/111111111111111111111111')
            .expect(404);
    });
    it('更改User', () => {
        return app.httpRequest()
            .put('/api/v1/users/59ea0940271de30cb5b79031')
            .set('Authorization', `Bearer ${token}`)
            .send({
            realName: '张er',
            nickName: '阿san',
            enrollmentYear: 2001,
            openId: '22222',
        })
            .expect(204);
    });
    it('请求User列表', () => {
        return app.httpRequest()
            .get('/api/v1/users')
            .expect(200);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsNkNBQXlDO0FBQ3pDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUVyQixJQUFJLEtBQUssR0FBVyxFQUFFLENBQUM7SUFFdkIsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2hCLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLEtBQUssR0FBRyxlQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFekIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV0QixFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtRQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTthQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDO2FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxLQUFLLEVBQUUsQ0FBQzthQUN2QyxJQUFJLENBQUM7WUFDSixRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsY0FBYyxFQUFFLElBQUk7WUFDcEIsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQzthQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO2FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUM7YUFDckIsSUFBSSxDQUFDO1lBQ0osUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsSUFBSTtZQUNkLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLE1BQU0sRUFBRSxPQUFPO1NBQ2hCLENBQUM7YUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTthQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDO2FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxLQUFLLEVBQUUsQ0FBQzthQUN2QyxJQUFJLENBQUM7WUFDSixRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsY0FBYyxFQUFFLElBQUk7WUFDcEIsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQzthQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO2FBQ3JCLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQzthQUM3QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtRQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTthQUNyQixHQUFHLENBQUMsc0JBQXNCLENBQUM7YUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7UUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7YUFDckIsR0FBRyxDQUFDLHdDQUF3QyxDQUFDO2FBQzdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO2FBQ3JCLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQzthQUM3QyxHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVUsS0FBSyxFQUFFLENBQUM7YUFDdkMsSUFBSSxDQUFDO1lBQ0osUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsTUFBTTtZQUNoQixjQUFjLEVBQUUsSUFBSTtZQUNwQixNQUFNLEVBQUUsT0FBTztTQUNoQixDQUFDO2FBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7YUFDckIsR0FBRyxDQUFDLGVBQWUsQ0FBQzthQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9