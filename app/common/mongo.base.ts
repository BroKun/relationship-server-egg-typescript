import * as crypto from 'crypto';
import { Schema } from 'mongoose';
function isModelBase(obj: Relationship.ModelBase): obj is Relationship.ModelBase {
  return obj && obj._id && (obj.createAt !== undefined) && (obj.updateAt !== undefined);
}
export function timePlugin(schema: Schema) {
  schema.add({
    createAt: { type: Schema.Types.Date, default: Date.now },
    updateAt: { type: Schema.Types.Date, default: Date.now },
  });
  schema.pre('save', function (next) {
    (this as Relationship.ModelBase).updateAt = new Date();
    next();
  });
}
export function etagPlugin(schema: Schema) {
  schema.methods.etag = function () {
    const thisObj = this;
    if (isModelBase(thisObj)) {
      const md5 = crypto.createHash('md5');
      md5.update(thisObj._id);
      md5.update(thisObj.createAt.getTime().toString());
      md5.update(thisObj.updateAt.getTime().toString());
      return md5.digest();
    }
  };
}
