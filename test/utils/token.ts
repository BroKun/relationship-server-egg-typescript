import {Application, DefaultConfig} from 'egg';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';

export default function (app: Application, id: string = ''): string {
  const exp: number = moment().add(30, 'days').unix();
  const tokenInfo = {
    _id: id,
    openid: '',
    session_key: '',
    unionid: '',
    exp,
  };
  const token = jwt.sign(tokenInfo, (app.config as DefaultConfig).jwt.secret);
  return token;
}
