import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TribeEntity } from "./tribe-intity";

@Entity("Hero")

export class HeroEntity extends BaseEntity{
      @PrimaryGeneratedColumn()
     id:number;

     @Column()
     name:string;

     @ManyToOne(
           ()=> TribeEntity,
           tribe => tribe.herose,{
                 onDelete:"SET NULL",
           }
         
     )
     @JoinColumn({
           name :"tribeID" 
     })

     relatedtribe:TribeEntity;
  
}