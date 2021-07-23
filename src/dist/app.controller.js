"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AppController = void 0;
var common_1 = require("@nestjs/common");
var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    AppController.prototype.getHello = function () {
        // return this.appService.getHello();
        return { 'name': '张三', "age": "20" };
    };
    // 使用session
    AppController.prototype.setSession = function (req) {
        // 设置session
        req.session.username = '哈哈哈';
        return '';
    };
    // 获取session
    AppController.prototype.getSession = function (req) {
        console.log(req.session);
        console.log(req.session.username);
        return '用户中心';
    };
    __decorate([
        common_1.Get(),
        common_1.Render('default/index') //写入Render渲染的装饰器，会渲染default文件夹下的index.ejs文件
    ], AppController.prototype, "getHello");
    __decorate([
        common_1.Get('setSession'),
        __param(0, common_1.Request())
    ], AppController.prototype, "setSession");
    __decorate([
        common_1.Get('getSession'),
        __param(0, common_1.Request())
    ], AppController.prototype, "getSession");
    AppController = __decorate([
        common_1.Controller()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
