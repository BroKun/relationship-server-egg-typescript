"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpMethod = require("http");
const httpsMethod = require("https");
// 发送http请求
function utilGenerator(httpMethod) {
    return (options, data) => {
        return new Promise((resolve, reject) => {
            // 请求参数
            const req = httpMethod.request(options, (res) => {
                res.setEncoding('utf8');
                const dataParts = [];
                res.on('data', (chunk) => {
                    dataParts.push(chunk);
                });
                res.on('end', () => {
                    const resData = dataParts.join('');
                    resolve(resData);
                });
            });
            req.on('error', (e) => {
                reject(e);
            });
            // 发送请求
            if (data) {
                req.write(data);
            }
            req.end();
        });
    };
}
exports.http = utilGenerator(httpMethod);
exports.https = utilGenerator(httpsMethod);
class ReqOps {
    constructor(hostname = 'localhost', path = '/', method, port, headers) {
        this.method = 'GET';
        this.hostname = hostname;
        this.path = path;
        if (method) {
            this.method = method;
        }
        if (port) {
            this.port = port;
        }
        if (headers) {
            this.headers = headers;
        }
    }
}
exports.ReqOps = ReqOps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQyxxQ0FBcUM7QUFFckMsV0FBVztBQUNYLHVCQUF1QixVQUFVO0lBQy9CLE1BQU0sQ0FBQyxDQUFDLE9BQWUsRUFBRSxJQUFvQixFQUFtQixFQUFFO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxPQUFPO1lBQ1AsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDOUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEIsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUN2QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixDQUFDLENBQUMsQ0FBQztnQkFDSCxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7b0JBQ2pCLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztZQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFDLENBQUM7WUFDOUIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDO0FBQ1ksUUFBQSxJQUFJLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pDLFFBQUEsS0FBSyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUtoRDtJQU1FLFlBQ0UsV0FBbUIsV0FBVyxFQUM5QixPQUFlLEdBQUcsRUFDbEIsTUFBc0IsRUFDdEIsSUFBb0IsRUFDcEIsT0FBd0I7UUFWbkIsV0FBTSxHQUFXLEtBQUssQ0FBQztRQVc1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7QUFsQkQsd0JBa0JDIn0=