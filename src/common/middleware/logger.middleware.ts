import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express'
 
// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: () => void) {
//     console.log("request...")
//     next();
//   }
// }


// 函数式中间件
export function logger(req, res, next) {
  console.log(`Request...`);
  next();
};