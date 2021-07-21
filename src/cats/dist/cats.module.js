"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CatsModule = void 0;
var common_1 = require("@nestjs/common");
var cats_controller_1 = require("./cats.controller");
var cats_service_1 = require("./cats.service");
var CatsModule = /** @class */ (function () {
    function CatsModule() {
    }
    CatsModule = __decorate([
        common_1.Global(),
        common_1.Module({
            controllers: [cats_controller_1.CatsController],
            providers: [cats_service_1.CatsService],
            exports: [cats_service_1.CatsService]
        })
    ], CatsModule);
    return CatsModule;
}());
exports.CatsModule = CatsModule;
