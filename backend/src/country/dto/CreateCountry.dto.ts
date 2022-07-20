import { IsNotEmpty, Length } from "class-validator";

export class CreateCountryDTO {

    @IsNotEmpty()
    @Length(4, 15)
    countryName: string;
    
}