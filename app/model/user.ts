import { Application } from 'egg';
import { Document, Model } from 'mongoose';
export interface IUser extends Document {
  realName: string;
  enrollmentYear?: number;
  openId: string;
  createAt: Date;
  updateAt: Date;
}
export default (app: Application): Model<IUser> => {
  const mongoose = app.mongoose;
  // TODO: 完善用户信息
  const userSchema = new mongoose.Schema({
    openId: { type: String, required: true },
    realName: { type: String, required: true },
    enrollmentYear: { type: Number },
    createAt: {
      type: Date, required: true,
      default: Date.now(),
    },
    updateAt: { type: Date, required: true },
    // picture: { type: String},
  });
  userSchema.pre('save', function (next) {
    const now = new Date();
    this.update_at = now;
    next();
  });
  return mongoose.model<IUser>('User', userSchema);
};
