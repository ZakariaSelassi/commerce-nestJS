import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type AddressDocument = Address & Document;
@Schema()
export class Address {
    @Prop({required:true})
    zip:number;

    @Prop({require:true,unique:true})
    street: string;

    @Prop({required:true})
    city:string;

    @Prop({require:true})
    country:string

}


export const AddressSchema = SchemaFactory.createForClass(Address);