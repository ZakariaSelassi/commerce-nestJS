import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop({required: true , unique: true})
    categoryName: string;
    
}

export const CategorySchema = SchemaFactory.createForClass(Category)