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
const typeorm_1 = require("typeorm");
const hero_intity_1 = require("./entity/hero-intity");
const tribe_intity_1 = require("./entity/tribe-intity");
const war_entity_1 = require("./entity/war-entity");
const express_1 = __importDefault(require("express"));
const hero_controller_1 = require("./router/hero-controller");
const tribe_controller_1 = require("./router/tribe-controller");
const app = (0, express_1.default)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, typeorm_1.createConnection)({
                type: "postgres",
                host: "localhost",
                port: 5433,
                username: "postgres",
                password: "fa30te5meh81",
                // database :"app",
                database: "newdb",
                synchronize: true,
                entities: [tribe_intity_1.TribeEntity, war_entity_1.WarEntity, hero_intity_1.HeroEntity],
                extra: {
                    trustServerCertificate: true
                }
            });
            console.log("databese connected");
            app.use(express_1.default.json());
            app.use('/api/hero', hero_controller_1.HeroController);
            app.use('/api/tribe', tribe_controller_1.TribeController);
            app.listen(3000, () => console.log("listening on port 3000"));
        }
        catch (e) {
            console.error(e);
            console.log("conection error");
        }
    });
}
main();
