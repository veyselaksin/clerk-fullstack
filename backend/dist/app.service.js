"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
let AppService = class AppService {
    async getHello(req) {
        const user = await clerk_sdk_node_1.clerkClient.users.getUser("user_2gxhGBqwzdpRq1ZqCSnshVhWcQ4");
        const OAuthProvider = "google";
        const oauthKey = await clerk_sdk_node_1.clerkClient.users.getUserOauthAccessToken("user_2gxhGBqwzdpRq1ZqCSnshVhWcQ4", `oauth_${OAuthProvider}`);
        console.log(oauthKey.data[0].token);
        return user;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map