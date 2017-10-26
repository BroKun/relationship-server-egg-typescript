"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**
 * 点赞模型
 */
exports.default = (app) => {
    const mongoose = app.mongoose;
    const starringSchema = new mongoose.Schema({
        stargazer: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'User' },
        stargazerOpenId: { type: mongoose_1.Schema.Types.String },
        stargazerRealName: { type: mongoose_1.Schema.Types.String },
        stargazerNickName: { type: mongoose_1.Schema.Types.String },
        stargazerAvatar: { type: mongoose_1.Schema.Types.String },
        starred: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'User' },
        starredOpenId: { type: mongoose_1.Schema.Types.String },
        starredRealName: { type: mongoose_1.Schema.Types.String },
        starredNickName: { type: mongoose_1.Schema.Types.String },
        starredAvatar: { type: mongoose_1.Schema.Types.String },
        createAt: { type: mongoose_1.Schema.Types.Date, default: Date.now },
    });
    starringSchema.index({ stargazer: 1, starred: 1 });
    return mongoose.model('Starring', starringSchema);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFycmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHVDQUF5QztBQUd6Qzs7R0FFRztBQUNILGtCQUFlLENBQUMsR0FBZ0IsRUFBb0IsRUFBRTtJQUNwRCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBRTlCLE1BQU0sY0FBYyxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtRQUN2RSxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzlDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNoRCxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDaEQsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUM5QyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtRQUNyRSxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzVDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDOUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUM5QyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzVDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7S0FDekQsQ0FBQyxDQUFDO0lBQ0gsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQVksVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQyJ9