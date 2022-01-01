import { HeroEntity } from "../entity/hero-intity";

export class HeroService{
    async insert(date :HeroEntity){
        const hero = HeroEntity.create(date);
        return await hero.save();

    }
    public async find(id:number){
        const tribe=await HeroEntity.findOne(id);
         return tribe;
    }
}