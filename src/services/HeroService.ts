import { Like, RelationId } from "typeorm";
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

    public async findAll(){
        const herose= await HeroEntity.find({
            where :{
                name :Like("%hero%"),
            },
            join:{
                alias:"tribe",
                innerJoinAndSelect:{
                    hero:"tribe-herose",
                }
            },
            // relations:["herose"],
        });
        
        return herose;
    }
}