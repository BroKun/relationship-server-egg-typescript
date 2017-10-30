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
  schema.method('etag', function (extra?: string) {
    const thisObj = this;
    const md5 = crypto.createHash('md5');
    md5.update('md5');
    if (isModelBase(thisObj)) {
      md5.update(thisObj._id.toString());
      md5.update(thisObj.createAt.getTime().toString());
      md5.update(thisObj.updateAt.getTime().toString());
      if (extra) {
        md5.update(extra);
      }
    }
    return md5.digest('hex');
  });
  schema.static('listEtag', function (list: Relationship.ModelBase[], extra?: string) {
    const md5 = crypto.createHash('md5');
    md5.update('md5');
    list.forEach((item) => {
      md5.update(item._id.toString());
      md5.update(item.createAt.getTime().toString());
      md5.update(item.updateAt.getTime().toString());
    });
    if (extra) {
      md5.update(extra);
    }
    return md5.digest('hex');
  });
}
