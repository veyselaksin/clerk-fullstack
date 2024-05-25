"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClerkAuthGuard = void 0;
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
const common_1 = require("@nestjs/common");
let ClerkAuthGuard = class ClerkAuthGuard {
    constructor() {
        this.logger = new common_1.Logger();
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        try {
            await clerk_sdk_node_1.default.verifyToken(request.cookies.__session, {});
        }
        catch (err) {
            this.logger.error(err);
            return false;
        }
        return true;
    }
};
exports.ClerkAuthGuard = ClerkAuthGuard;
exports.ClerkAuthGuard = ClerkAuthGuard = __decorate([
    (0, common_1.Injectable)()
], ClerkAuthGuard);
//# sourceMappingURL=clerk.auth.guard.js.map