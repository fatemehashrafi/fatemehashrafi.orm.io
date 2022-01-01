import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HeroEntity } from "./hero-intity";
import { WarEntity } from "./war-entity";

@Entity("Tribe")
export class TribeEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id :number;
    @Column()
    name :string;
    
    @OneToMany( 
         () => HeroEntity,
         hero =>hero.relatedtribe
         ) 
         herose:HeroEntity[];

         @ManyToMany(
            ()=> WarEntity
         )
          @JoinTable({
           name:"warResult",

           joinColumn:{
             name:'tribeId',
             referencedColumnName:'id'
            },
            inverseJoinColumn:{
            name :'warId',
            referencedColumnName:'id'
            }
          })wars:WarEntity[]

}
