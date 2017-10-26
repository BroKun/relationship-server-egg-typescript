"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authorized(target, propertyKey, descriptor) {
    const method = descriptor.value;
    function authCheck() {
        const key = this.config.jwt.key;
        if (this.ctx.state && this.ctx.state[key]) {
            return method.call(this);
        }
        this.ctx.throw(401);
    }
    descriptor.value = authCheck;
}
exports.default = authorized;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhvcml6ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvQkFBbUMsTUFBVyxFQUFFLFdBQW1CLEVBQUUsVUFBOEI7SUFDakcsTUFBTSxNQUFNLEdBQWEsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUMxQztRQUNFLE1BQU0sR0FBRyxHQUFZLElBQUksQ0FBQyxNQUF3QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDM0QsRUFBRSxDQUFDLENBQUUsSUFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFLLElBQW1CLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNBLElBQW1CLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsVUFBVSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDL0IsQ0FBQztBQVZELDZCQVVDIn0=