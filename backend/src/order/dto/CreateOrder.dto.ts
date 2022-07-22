import { IsNotEmpty } from "class-validator";
import { Product } from "src/models/product.schema";
import { Users } from "src/models/users.schema";

export class CreateOrderDTO{
    
    
    user:Users;
    product:Product;
    quantity:number;
    price:number;
    status:string;
    dateOrdered:Date;

}