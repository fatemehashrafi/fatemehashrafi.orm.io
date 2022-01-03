import  Express, { application } from "express";
import { TribeEntity } from "../entity/tribe-intity";
import { HeroService } from "../services/HeroService";
import { TribeService } from "../services/tribeservice";

const router =Express.Router();
const tribeService = new TribeService();
const heroService= new HeroService();
 router.post('/' , async (res,req)=>{
     const {name} = res.body ;

     let tribe =new TribeEntity();
     tribe.name=name;
     tribe=await tribeService.insert(tribe);
      return req.json(tribe);
 });

 router.put('/:tribeId/new.hero/:heroId',async(req,res)=>{
    const {tribeId ,heroId}=req.params;

    const tribe=await tribeService.find(parseInt(tribeId));
      if(!tribe){
         res.status(404).send("tribe not found");
     }
    const hero=await heroService.find(parseInt(heroId));
     
      if(!hero){
         res.status(404).send("hero not found");
     }
     const updateTribe= tribeService.addHero(tribe ,hero);
     
     return updateTribe;

 });

    router.delete('/:id',async(req,res)=>{
        try{
        const {id} =req.params;
        const tribe= await tribeService.find(parseInt(id));
        if(!tribe){
            res.status(404).send("tribe not found");
        }
         await tribeService.delete(parseInt(id));
        return res.json(tribe);
    }
    catch(e){
        res.send(500).send(`Eror: ${e}`);

    }


    })

export{router as TribeController}

    