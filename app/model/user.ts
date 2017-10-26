import { Application } from 'egg';
import { Document, Schema } from 'mongoose';

/**
 * 用户模型
 */
export default (app: Application) => {
  const mongoose = app.mongoose;

  const userSchema = new mongoose.Schema({
    openId: { type: Schema.Types.String, required: true },
    unionId: { type: Schema.Types.String },
    realName: { type: Schema.Types.String },
    nickName: { type: Schema.Types.String },
    geoPosition: { type: Schema.Types.String },
    avatar: { type: Schema.Types.String },
    gender: { type: Schema.Types.Number },
    enrollmentYear: { type: Schema.Types.Number },
    major: { type: Schema.Types.String },
    bio: { type: Schema.Types.String },
    type: { type: Schema.Types.Number, default: 0 },
    masters: { type: Schema.Types.ObjectId, ref: 'User' },
    apprentices: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    unacceptedApprentices: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createAt: { type: Schema.Types.Date, default: Date.now },
    updateAt: { type: Schema.Types.Date, default: Date.now },
  });
  userSchema.index({ openId: 1 }, { unique: true });
  userSchema.index({ nickName: 1 });
  userSchema.index({ unionId: 1 });
  userSchema.pre('save', function (next) {
    const now = new Date();
    this.updateAt = now;
    next();
  });
  return mongoose.model<Document & Relationship.User>('User', userSchema);
};
