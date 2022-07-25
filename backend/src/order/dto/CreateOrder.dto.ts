import { IsNotEmpty, IsNumber } from "class-validator";
import { Product } from "src/models/product.schema";
import { Users } from "src/models/users.schema";

export class CreateOrderDTO{

    @IsNotEmpty()
    @IsNumber()
    quantity:number;
    
}