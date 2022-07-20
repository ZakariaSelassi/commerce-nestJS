import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Address } from "./address.schema";
import { Roles } from "./roles.schema";


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

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Roles',required:true})
    roles:Roles;

}

export const UsersSchema = SchemaFactory.createForClass(Users)