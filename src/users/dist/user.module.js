"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersModule = void 0;
var common_1 = require("@nestjs/common");
// import { TypeOrmModule } from '@nestjs/typeorm';
var users_service_1 = require("./users.service");
var users_controller_1 = require("./users.controller");
var user_model_1 = require("./user.model");
var sequelize_1 = require("@nestjs/sequelize");
// import { User } from './user.entity';
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        common_1.Module({
            // imports: [TypeOrmModule.forFeature([User])], //使用typeorm连接实体部分
            imports: [sequelize_1.SequelizeModule.forFeature([user_model_1.UserModel])],
            providers: [users_service_1.UsersService],
            controllers: [users_controller_1.UsersController]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
