import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('person')
 export class person{
    @PrimaryColumn({
        type :"int",
    })

    id:number=-1;

    @Column({
        type: "int",
    })
    name :string="";
    age: number = 19;
   
}