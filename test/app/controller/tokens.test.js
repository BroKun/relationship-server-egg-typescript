"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mm = require("egg-mock");
describe('token管理', () => {
    const app = mm.app();
    before(async () => {
        await app.ready();
    });
    after(() => app.close());
    afterEach(mm.restore);
    it('真实请求,创建token,无效的Code', () => {
        return app.httpRequest()
            .post('/api/v1/tokens')
            .send({ code: 1111 })
            .expect(422);
    });
    it('成功创建token', () => {
        app.mockService('wechat', 'jscode2session', async () => {
            return {
                openid: '1111',
                session_key: '1111',
                unionid: '1111',
            };
        });
        return app.httpRequest()
            .post('/api/v1/tokens')
            .send({ code: 1111 })
            .expect(201);
    });
    it('创建token失败,微信API错误', () => {
        app.mockService('wechat', 'jscode2session', async () => {
            return {
                errcode: 400000,
                errmsg: 'api错误',
            };
        });
        return app.httpRequest()
            .post('/api/v1/tokens')
            .send({ code: 1111 })
            .expect(422);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5zLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbnMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUUvQixRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtJQUN2QixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDckIsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2hCLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBRXpCLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdEIsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRTtRQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTthQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUM7YUFDdEIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1FBQ25CLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ3JELE1BQU0sQ0FBQztnQkFDTCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxXQUFXLEVBQUUsTUFBTTtnQkFDbkIsT0FBTyxFQUFFLE1BQU07YUFDaEIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7YUFDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2FBQ3RCLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBQzNCLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ3JELE1BQU0sQ0FBQztnQkFDTCxPQUFPLEVBQUUsTUFBTTtnQkFDZixNQUFNLEVBQUUsT0FBTzthQUNoQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTthQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUM7YUFDdEIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=