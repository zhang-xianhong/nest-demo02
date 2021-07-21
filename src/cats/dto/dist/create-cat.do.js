"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListAllEntities = exports.UpdateCatDto = exports.CreateCatDto = void 0;
var class_validator_1 = require("class-validator");
var CreateCatDto = /** @class */ (function () {
    function CreateCatDto() {
    }
    __decorate([
        class_validator_1.IsString()
    ], CreateCatDto.prototype, "name");
    __decorate([
        class_validator_1.IsInt()
    ], CreateCatDto.prototype, "age");
    __decorate([
        class_validator_1.IsString()
    ], CreateCatDto.prototype, "breed");
    return CreateCatDto;
}());
exports.CreateCatDto = CreateCatDto;
;
var UpdateCatDto = /** @class */ (function () {
    function UpdateCatDto() {
    }
    return UpdateCatDto;
}());
exports.UpdateCatDto = UpdateCatDto;
;
var ListAllEntities = /** @class */ (function () {
    function ListAllEntities() {
    }
    return ListAllEntities;
}());
exports.ListAllEntities = ListAllEntities;
;
