import { createConnection } from "typeorm"
import { HeroEntity } from "./entity/hero-intity";
import { TribeEntity } from "./entity/tribe-intity";
import { WarEntity } from "./entity/war-entity";
import express from "express";
import { HeroController } from "./router/hero-controller";
import { TribeController } from "./router/tribe-controller";
const app = express()

async function main(){
    try{
        await createConnection({
        type :"postgres",
        host :"localhost",
        port : 5433,
        username :"postgres",
        password :"fa30te5meh81",
        // database :"app",
        database :"newdb",
        synchronize :true,
        entities:["TribeEntity","WarEntity","HeroEntity"],
        extra :{
            trustServerCertificate:true
        }
    });
    console.log("databese connected");
    app.use(express.json())
    app.use('/api/hero',HeroController );
    app.use('/api/tribe',TribeController );

    app.listen(3000 ,()=> console.log("listening on port 3000"));

    }
    catch (e:any){
        console.error(e);
        console.log("conection error");

    }
}
main()

