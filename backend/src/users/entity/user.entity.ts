import { Exclude } from "class-transformer";
import { Address } from "src/models/address.schema";
import { Roles } from "src/models/roles.schema";

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
    roles:Roles;

    constructor(partial :Partial<UserEntity>){
        Object.assign(this,partial)
    }


}