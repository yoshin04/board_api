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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'db',
                port: 3306,
                username: 'board_user',
                password: 'password123',
                database: 'board_db',
                synchronize: true,
                logging: false,
                entities: ['dist/entity/**/*.js'],
                migrations: ['dist/migration/**/*.js'],
                subscribers: ['src/subscriber/**/*.ts'],
                cli: {
                    entitiesDir: 'src/entity',
                    migrationsDir: 'src/migration',
                    subscribersDir: 'src/subscriber',
                },
            }),
            auth_module_1.AuthModule, //これがないと認証処理が動かない
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map