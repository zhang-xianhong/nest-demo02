"use strict";
exports.__esModule = true;
exports.logger = void 0;
// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: () => void) {
//     console.log("request...")
//     next();
//   }
// }
// 函数式中间件
function logger(req, res, next) {
    console.log("Request...");
    next();
}
exports.logger = logger;
;
