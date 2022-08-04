import { Exclude } from "class-transformer";
import { Address } from "src/models/address.schema";
import { Role } from "src/models/enums/role.enum";

export class UserEntity {
    id: string;
    username:string;
    firstname:string;
    lastname:string;
    email:string;
    @Exclude()  
    password:string;
    phone:string;

    address: Address;

    @Exclude()
    isAdmin: boolean;
    
    
    
    constructor(partial :Partial<UserEntity>){
        Object.assign(this,partial)
    }


}