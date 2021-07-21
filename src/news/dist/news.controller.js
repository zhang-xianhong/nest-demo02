"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewsController = void 0;
var common_1 = require("@nestjs/common");
var NewsController = /** @class */ (function () {
    function NewsController(newsService) {
        this.newsService = newsService;
    } //实例化服务
    // 在Controller里面控制路由
    NewsController.prototype.index = function () {
        //  获取newsService里面的方法
        // console.log(this.newsService.findAll()); //服务里面findAll方法的数据
        return {
            newsList: this.newsService.findAll()
        };
    };
    __decorate([
        common_1.Get(),
        common_1.Render('default/news')
    ], NewsController.prototype, "index");
    NewsController = __decorate([
        common_1.Controller('news')
    ], NewsController);
    return NewsController;
}());
exports.NewsController = NewsController;
