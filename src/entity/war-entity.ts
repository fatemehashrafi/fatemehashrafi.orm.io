import { Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TribeEntity } from "./tribe-intity";

export class WarEntity{
    @PrimaryGeneratedColumn()
    id :number;
     
    @Column()
    location:string;

    @ManyToMany(
        ()=> TribeEntity
    )
     @JoinTable({
        name:"warResult",

        joinColumn:{
          name:'warId',
          referencedColumnName:'id'
         },
         inverseJoinColumn:{
         name :'tribeId',
         referencedColumnName:'id'
        },
    })tribes :TribeEntity[]
}

 


     
     
