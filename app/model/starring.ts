import { Application } from 'egg';
import { Document, Schema } from 'mongoose';

/**
 * 点赞模型
 */
export default (app: Application) => {
  const mongoose = app.mongoose;

  const starringSchema = new mongoose.Schema({
    stargazer: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    starred: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    createAt: { type: Schema.Types.Date, default: Date.now },
  });
  starringSchema.index({ stargazer: 1, starred: 1 });

  return mongoose.model<Relationship.Starring & Document>('Starring', starringSchema);
};
