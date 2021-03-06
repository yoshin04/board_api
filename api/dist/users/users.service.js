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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findOne(email) {
        return this.userRepository.findOneOrFail({ email });
    }
    async findById(tokenId) {
        return await this.userRepository.findOne(tokenId);
    }
    async findAll() {
        return this.userRepository.find();
    }
    async signUp(newUser) {
        const user = new User_1.User();
        const { name, email, password } = newUser;
        user.name = name;
        user.password = bcrypt.hashSync(password, parseInt(process.env.SALT_ROUND));
        user.email = email;
        return await this.userRepository.save(user);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(User_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map