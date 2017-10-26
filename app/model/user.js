"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const users_model_1 = require("../common/users.model");
/**
 * 用户模型
 */
exports.default = (app) => {
    const mongoose = app.mongoose;
    const userSchema = new mongoose.Schema({
        openId: { type: mongoose_1.Schema.Types.String, required: true },
        unionId: { type: mongoose_1.Schema.Types.String },
        realName: { type: mongoose_1.Schema.Types.String },
        nickName: { type: mongoose_1.Schema.Types.String, required: true },
        avatar: { type: mongoose_1.Schema.Types.String },
        enrollmentYear: { type: mongoose_1.Schema.Types.Number },
        major: { type: mongoose_1.Schema.Types.String },
        bio: { type: mongoose_1.Schema.Types.String },
        member: { type: mongoose_1.Schema.Types.String, default: false },
        masters: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
        apprentices: [users_model_1.userBaseSchema],
        createAt: { type: mongoose_1.Schema.Types.Date, default: Date.now },
        updateAt: { type: mongoose_1.Schema.Types.Date, default: Date.now },
    });
    userSchema.index({ openId: 1, unionId: 1 }, { unique: true });
    userSchema.index({ nickName: 1 }, { unique: true });
    userSchema.pre('save', function (next) {
        const now = new Date();
        this.updateAt = now;
        next();
    });
    return mongoose.model('User', userSchema);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBeUM7QUFDekMsdURBQThEO0FBRTlEOztHQUVHO0FBQ0gsa0JBQWUsQ0FBQyxHQUFnQixFQUFnQixFQUFFO0lBQ2hELE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFFOUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3JDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtRQUNyRCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ3RDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDdkMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1FBQ3ZELE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDckMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUM3QyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ3BDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDbEMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO1FBQ3JELE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtRQUNyRCxXQUFXLEVBQUUsQ0FBQyw0QkFBYyxDQUFDO1FBQzdCLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDeEQsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtLQUN6RCxDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5RCxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDcEQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxJQUFJO1FBQ25DLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFRLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMifQ==