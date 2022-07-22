import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Category } from "./category.schema";
import { Supplier } from "./supplier.schema";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    
    @Prop({required: true , unique: true})
    productName: string;

    @Prop({required: true})
    productDescription: string;

    @Prop({required: true})
    productPrice: number;

    @Prop({required: true})
    stock: number;

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Category',required:true})
    category:Category;

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Supplier',required:true})
    supplier:Supplier;
    
}

export const ProductSchema = SchemaFactory.createForClass(Product)