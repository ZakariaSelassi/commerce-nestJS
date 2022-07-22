import { IsAlphanumeric, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    @Length(2, 50)
    @IsAlphanumeric()
    categoryName: string;
}