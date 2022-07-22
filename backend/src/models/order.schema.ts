import { Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Product } from "./product.schema";
import { Users } from "./users.schema";

export type OrderDocument = Order & Document;

export class Order {

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Users',required:true})
    user:Users;

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Products',required:true})
    product:Product;

    @Prop({required:true})
    quantity:number;

    @Prop({required:true})
    price:number;

    @Prop({required:true, enum:['pending','delivered','cancelled'], default:'pending'})
    status:string;

    @Prop({required:true})
    dateOrdered:Date;
 
}

export const OrderSchema = SchemaFactory.createForClass(Order)