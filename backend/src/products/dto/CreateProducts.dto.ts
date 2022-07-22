import { IsNotEmpty, IsNumber, isString } from "class-validator";
import { Category } from "src/models/category.schema";
import { Supplier } from "src/models/supplier.schema";

export class CreateProductsDTO{
    @IsNotEmpty()
    productName: string;
    @IsNotEmpty()
    productDescription: string;
    @IsNotEmpty()
    @IsNumber()
    productPrice: number;

    @IsNotEmpty()
    @IsNumber()
    stock: number;


    @IsNotEmpty()
    category: Category;
    
    @IsNotEmpty()
    supplier: Supplier;
}