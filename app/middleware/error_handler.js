"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (option, app) => {
    return async function errHandler(ctx, next) {
        try {
            await next();
        }
        catch (err) {
            // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
            app.emit('error', err, this);
            const status = err.status || 500;
            // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
            const error = status === 500 && app.config.env === 'prod'
                ? 'Internal Server Error'
                : err.message;
            // 从 error 对象上读出各个属性，设置到响应中
            ctx.body = { error };
            if (status === 422) {
                ctx.body.detail = err.errors;
            }
            ctx.status = status;
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JfaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVycm9yX2hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrQkFBZSxDQUFDLE1BQU0sRUFBRSxHQUFnQixFQUFFLEVBQUU7SUFDMUMsTUFBTSxDQUFDLEtBQUsscUJBQXFCLEdBQVksRUFBRSxJQUFJO1FBQ2pELElBQUksQ0FBQztZQUNILE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNiLHlDQUF5QztZQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0IsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFDakMsd0NBQXdDO1lBQ3hDLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssTUFBTTtnQkFDdkQsQ0FBQyxDQUFDLHVCQUF1QjtnQkFDekIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDaEIsMkJBQTJCO1lBQzNCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUNyQixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUMvQixDQUFDO1lBQ0QsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsQ0FBQztJQUNILENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9