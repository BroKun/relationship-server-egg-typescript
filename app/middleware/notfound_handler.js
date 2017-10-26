"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (option, app) => {
    return async function notfound_handler(ctx, next) {
        await next();
        if (ctx.status === 404 || ctx.realStatus === 404) {
            ctx.throw(404, 'Not Found');
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90Zm91bmRfaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdGZvdW5kX2hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrQkFBZSxDQUFDLE1BQU0sRUFBRSxHQUFnQixFQUFFLEVBQUU7SUFDMUMsTUFBTSxDQUFDLEtBQUssMkJBQTJCLEdBQVksRUFBRSxJQUFJO1FBQ3ZELE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDYixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakQsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9