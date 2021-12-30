import { createConnection } from "typeorm"
import { Employee } from "./employee";
import {person} from "./person"

async function main(){
    try{await createConnection({
        type :"postgres",
        host :"localhost",
        port : 5433,
        username :"postgres",
        password :"fa30te5meh81",
        database :"app",
        synchronize :true,
        entities:[person ,Employee],
        extra :{
            trustServerCertificate:true
        }
    });
    console.log("databese contanate");
    }
    catch (e:any){
        console.error(e);
        console.log("conection error");

    }
}
main()

