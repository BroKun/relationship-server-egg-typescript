"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
class WXBizDataCrypt {
    constructor(appId, sessionKey) {
        this.appId = appId;
        this.sessionKey = sessionKey;
    }
    decryptData(encryptedData, iv) {
        // base64 decode
        const sessionKey = new Buffer(this.sessionKey, 'base64');
        encryptedData = new Buffer(encryptedData, 'base64');
        iv = new Buffer(iv, 'base64');
        let decoded = null;
        try {
            // 解密
            const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);
            // 设置自动 padding 为 true，删除填充补位
            decipher.setAutoPadding(true);
            let decodedStr = decipher.update(encryptedData, 'binary', 'utf8');
            decodedStr += decipher.final('utf8');
            decoded = JSON.parse(decodedStr);
        }
        catch (err) {
            throw new Error('Illegal Buffer');
        }
        if (decoded.watermark.appid !== this.appId) {
            throw new Error('Illegal Buffer');
        }
        return decoded;
    }
}
exports.default = WXBizDataCrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV1hCaXpEYXRhQ3J5cHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXWEJpekRhdGFDcnlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFpQztBQWlCakM7SUFHRSxZQUFZLEtBQWEsRUFBRSxVQUFrQjtRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsV0FBVyxDQUFJLGFBQWEsRUFBRSxFQUFFO1FBQzlCLGdCQUFnQjtRQUNoQixNQUFNLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU5QixJQUFJLE9BQU8sR0FBYSxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDO1lBQ0gsS0FBSztZQUNMLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLDZCQUE2QjtZQUM3QixRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLElBQUksVUFBVSxHQUFXLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMxRSxVQUFVLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQTlCRCxpQ0E4QkMifQ==