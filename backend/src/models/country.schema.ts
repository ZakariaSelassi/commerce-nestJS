import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CountryDocument = Country & Document;

@Schema()
export class Country {
    @Prop({required: true , unique: true})
    countryName: string;
    
}

export const CountrySchema = SchemaFactory.createForClass(Country)