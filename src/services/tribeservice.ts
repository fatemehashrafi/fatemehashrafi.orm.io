import { HeroEntity } from "../entity/hero-intity";
import { TribeEntity } from "../entity/tribe-intity";

export class TribeService{
    async insert(date :TribeEntity){
        const hero = TribeEntity.create(date);
        return await hero.save();

    }
    public async find(id:number){
        const tribe=await TribeEntity.findOne(id);
         return tribe;
    }

    public async addHero( tribe :TribeEntity, hero :HeroEntity){
        console.log(tribe.herose);
        if(!tribe.herose){
            console.log('if',tribe.herose);
           tribe.herose.push(hero);
        }else{
           tribe.herose=[hero];
        }
         return await tribe.save();
          
    }

    public async delete(id :number){
       return TribeEntity.delete(id);
    }
}