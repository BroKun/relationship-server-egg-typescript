import * as assert from 'assert';
import { UnitTestConfig } from 'egg';
import * as mm from 'egg-mock';
import WXBizDataCrypt from '../../../app/utils/WXBizDataCrypt';
describe('微信解密模块', () => {
  const app = mm.app();
  before(async () => {
    await app.ready();
  });
  after(() => app.close());
  afterEach(mm.restore);
  it('test index请求', () => {
    const dataObj = new WXBizDataCrypt(
      (app.config as UnitTestConfig).wxapp.AppID,
      (app.config as UnitTestConfig).wxapp.AppSecret);
    try {
      dataObj.decryptData('error data', '');
    } catch (ex) {
      assert((ex as Error).message === 'Illegal Buffer');
    }
  });
});
