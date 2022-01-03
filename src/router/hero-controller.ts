import  Express, { application } from "express";
import { HeroEntity } from "../entity/hero-intity";
import { HeroService } from "../services/HeroService";

const router =Express.Router();
const heroService = new HeroService();
 router.post('/' , async (res,req)=>{
     const {name} = res.body ;

     let hero =new HeroEntity();
     hero.name=name;
      hero=await heroService.insert(hero);
      return req.json(hero);
 });

 router.get('/',async(req ,res)=>{
    //  console.log(req.query);
      const herose= await heroService.findAll();
      return res.json(herose);
 })

export{
    router as HeroController
}