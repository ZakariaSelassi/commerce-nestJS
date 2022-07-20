import { IsNotEmpty, IsPhoneNumber } from "class-validator";
import { Country } from "src/models/country.schema";

export class CreateSupplierDTO{


    @IsNotEmpty()
    supplierName:string;

    @IsNotEmpty()
    @IsPhoneNumber('BE',{message:'Phone number is not valid'})
    supplierPhone:string;


    @IsNotEmpty()
    supplierCountry:Country
}
