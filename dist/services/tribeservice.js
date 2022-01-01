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
exports.TribeService = void 0;
const tribe_intity_1 = require("../entity/tribe-intity");
class TribeService {
    insert(date) {
        return __awaiter(this, void 0, void 0, function* () {
            const hero = tribe_intity_1.TribeEntity.create(date);
            return yield hero.save();
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tribe = yield tribe_intity_1.TribeEntity.findOne(id);
            return tribe;
        });
    }
    addHero(tribe, hero) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(tribe.herose);
            if (!tribe.herose) {
                console.log('if', tribe.herose);
                tribe.herose.push(hero);
            }
            else {
                tribe.herose = [hero];
            }
            yield tribe.save();
            return tribe;
        });
    }
}
exports.TribeService = TribeService;
