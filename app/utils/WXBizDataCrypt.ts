import * as crypto from 'crypto';
interface Base {
  /**
   * 数据水印
   */
  watermark:
  {
      /**
       * 敏感数据归属appid，开发者可校验此参数与自身appid是否一致
       */
      appid:string;
      /**
       * 敏感数据获取的时间戳, 开发者可以用于数据时效性校验
       */
      timestamp:number;
  }
}
export default class WXBizDataCrypt{
  appId:string;
  sessionKey:string;
  constructor(appId:string, sessionKey:string) {
    this.appId = appId;
    this.sessionKey = sessionKey;
  }
  decryptData<T>(encryptedData, iv): T {
    // base64 decode
    const sessionKey = new Buffer(this.sessionKey, 'base64');
    encryptedData = new Buffer(encryptedData, 'base64');
    iv = new Buffer(iv, 'base64');

    let decoded:T & Base = null;
    try {
      // 解密
      const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);
      // 设置自动 padding 为 true，删除填充补位
      decipher.setAutoPadding(true);
      let decodedStr: string = decipher.update(encryptedData, 'binary', 'utf8');
      decodedStr += decipher.final('utf8');
      decoded = JSON.parse(decodedStr);
    } catch (err) {
      throw new Error('Illegal Buffer');
    }
    if (decoded.watermark.appid !== this.appId) {
      throw new Error('Illegal Buffer');
    }
    return decoded;
  };
}
