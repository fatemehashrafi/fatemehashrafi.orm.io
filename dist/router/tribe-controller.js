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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TribeController = void 0;
const express_1 = __importDefault(require("express"));
const tribe_intity_1 = require("../entity/tribe-intity");
const HeroService_1 = require("../services/HeroService");
const tribeservice_1 = require("../services/tribeservice");
const router = express_1.default.Router();
exports.TribeController = router;
const tribeService = new tribeservice_1.TribeService();
const heroService = new HeroService_1.HeroService();
router.post('/', (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = res.body;
    let hero = new tribe_intity_1.TribeEntity();
    hero.name = name;
    hero = yield tribeService.insert(hero);
    return req.json(hero);
}));
router.put('/:tribeId/new.hero/:heroId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tribeId, heroId } = req.params;
    const tribe = yield tribeService.find(parseInt(tribeId));
    if (!tribe) {
        res.status(404).send("tribe not found");
    }
    const hero = yield heroService.find(parseInt(heroId));
    if (!hero) {
        res.status(404).send("hero not found");
    }
    const updateTribe = tribeService.addHero(tribe, hero);
    return updateTribe;
}));
