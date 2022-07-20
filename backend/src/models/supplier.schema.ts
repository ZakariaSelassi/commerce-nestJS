import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Country } from "./country.schema";

export type SupplierDocument = Supplier & Document;

@Schema()
export class Supplier {
    
    @Prop({required: true , unique: true})
    supplierName: string;
    
    @Prop({required: true})
    supplierPhone: string;

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Country',required:true})
    countryName:Country;
    
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier)