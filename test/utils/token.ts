import {Application, DefaultConfig} from 'egg';
import * as jwt from 'jsonwebtoken';
import { SignOptions } from '../../app/common/tokens.model';

export default function (app: Application, obj?: object): string {
  const tokenInfo = {
    openid: '30624700',
    session_key: '',
    unionid: '',
    openId: '30624700',
    _id: '59f09727fa451437706901db',
  };
  const token = jwt.sign(obj ? obj : tokenInfo, (app.config as DefaultConfig).jwt.secret, SignOptions());
  return token;
}
