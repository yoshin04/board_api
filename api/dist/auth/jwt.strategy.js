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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
// import先が'passport-local'では無い事に注意！
const passport_jwt_1 = require("passport-jwt");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const constants_1 = require("./constants");
const auth_dto_1 = require("../dto/auth.dto");
const auth_service_1 = require("./auth.service");
/**
 * @description JWTの認証処理を行うクラス
 */
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(authService) {
        super({
            // Authorization bearerからトークンを読み込む関数を返す
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            // 有効期間を無視するかどうか
            ignoreExpiration: false,
            secretOrKey: constants_1.jwtConstants.secret,
        });
        this.authService = authService;
    }
    // ここでPayloadを使ったバリデーション処理を実行できる
    // Payloadは、AuthService.login()で定義した値
    async validate(payload) {
        const user = await this.authService.validateToken(payload.id);
        if (!user) {
            throw new common_1.UnauthorizedException(); // 認証失敗
        }
        return { id: payload.id };
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map