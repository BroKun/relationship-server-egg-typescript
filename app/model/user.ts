import { Application } from 'egg';
module.exports = (app:Application) => {
  const mongoose = app.mongoose;
  // TODO: 完善用户信息
  const UserSchema = new mongoose.Schema({
    realName: { type: String },
    enrollmentYear: { type: Number },
    // picture: { type: String},
  });
  return mongoose.model('User', UserSchema);
}
