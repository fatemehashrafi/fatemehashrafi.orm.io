"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroService = void 0;
const typeorm_1 = require("typeorm");
const hero_intity_1 = require("../entity/hero-intity");
class HeroService {
    insert(date) {
        return __awaiter(this, void 0, void 0, function* () {
            const hero = hero_intity_1.HeroEntity.create(date);
            return yield hero.save();
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tribe = yield hero_intity_1.HeroEntity.findOne(id);
            return tribe;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const herose = yield hero_intity_1.HeroEntity.find({
                where: {
                    name: (0, typeorm_1.Like)("%hero%"),
                },
                join: {
                    alias: "tribe",
                    innerJoinAndSelect: {
                        hero: "tribe-herose",
                    }
                },
                // relations:["herose"],
            });
            return herose;
        });
    }
}
exports.HeroService = HeroService;
