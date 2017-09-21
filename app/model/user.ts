import { Application } from 'egg';
import { Document } from 'mongoose';
export interface IUser extends Document {
  realName: string;
  enrollmentYear?: number;
}

export default (app: Application) => {
  const mongoose = app.mongoose;
  // TODO: 完善用户信息
  const userSchema = new mongoose.Schema({
    realName: { type: String, required: true },
    enrollmentYear: { type: Number },
    // picture: { type: String},
  });
  return mongoose.model<IUser>('User', userSchema);
};
