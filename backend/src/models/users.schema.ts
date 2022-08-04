import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Address } from "./address.schema";
import { Role } from "./enums/role.enum";


export type UsersDocument = Users & Document;

@Schema()
export class Users {
    @Prop({required: true , unique: true})
    username: string;

    @Prop({required: true})
    firstname: string;

    @Prop({required: true})
    lastname: string;

    @Prop({required: true})
    email: string;
    

    @Prop({required:true})
    password:string;

    @Prop({required:true})
    phone:string;

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Address',required:false})
    address:Address

    @Prop({required:true, default:false})
    isAdmin:boolean


}

export const UsersSchema = SchemaFactory.createForClass(Users)