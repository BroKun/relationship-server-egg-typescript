
export class Code2Session {
  // appid	是	小程序唯一标识
  appid: string;
  // secret	是	小程序的 app secret
  secret: string;
  // js_code	是	登录时获取的 code
  code: string;
  // grant_type
  'grant_type': string = 'authorization_code';
  constructor(appid: string, secret: string, code: string, grantType?: string) {
    this.appid = appid;
    this.secret = secret;
    this.code = code;
    if (grantType) {
      this['grant_type'] = grantType;
    }
  }
}

export function isError(res: WX.Session | WX.Error): res is WX.Error {
  if (res && (res as WX.Error).errcode) {
    return true;
  }
  return false;
}
