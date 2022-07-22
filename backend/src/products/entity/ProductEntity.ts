import { Exclude } from "class-transformer";
import { Category } from "src/models/category.schema";
import { Supplier } from "src/models/supplier.schema";

export class ProductEntity {
    id:string;
    productName:string;
    productDescription:string;
    productPrice:number;
    stock:number;
    category:Category;
     @Exclude()
     supplier:Supplier

     constructor(partial: Partial<ProductEntity>){
        Object.assign(this,partial)
     }
}