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
exports.HeroController = void 0;
const express_1 = __importDefault(require("express"));
const hero_intity_1 = require("../entity/hero-intity");
const HeroService_1 = require("../services/HeroService");
const router = express_1.default.Router();
exports.HeroController = router;
const heroService = new HeroService_1.HeroService();
router.post('/', (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = res.body;
    let hero = new hero_intity_1.HeroEntity();
    hero.name = name;
    hero = yield heroService.insert(hero);
    return req.json(hero);
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //  console.log(req.query);
    const herose = yield heroService.findAll();
    return res.json(herose);
}));
