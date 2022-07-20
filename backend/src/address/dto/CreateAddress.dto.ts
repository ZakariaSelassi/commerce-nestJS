import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAddressDTO{
 
    @IsNotEmpty()
    zip:number

    @IsNotEmpty()
    street:string;

    @IsNotEmpty()
    city:string;

    @IsNotEmpty()
    country:string;
}