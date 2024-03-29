"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by madhuranga on 1/26/17.
 */
const core_1 = require('@angular/core');
const user_model_1 = require('./user.model');
const login_service_1 = require('../services/login.service');
let UserComponent = class UserComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.model = new user_model_1.User('', '');
        this.frameWork = "Sails";
        this.loginService.getPostData()
            .subscribe(posts => console.log(posts));
    }
    addNew() {
        console.log(this.model);
        this.loginService.sendPostData(this.model)
            .subscribe(posts => console.log(posts));
    }
};
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: 'user.component.html',
        providers: [login_service_1.LoginService]
    }), 
    __metadata('design:paramtypes', [login_service_1.LoginService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map