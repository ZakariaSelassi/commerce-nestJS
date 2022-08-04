import { IsNotEmpty, IsNumber } from "class-validator";


export class CreateOrderDTO{

    @IsNotEmpty()
    quantity:number;

}