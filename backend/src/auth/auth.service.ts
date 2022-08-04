import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/models/users.schema';

import { UsersService } from 'src/users/users.service';
import { comparePassword, encodePassword } from 'src/utils/bcrypte';

@Injectable()
export class AuthService {

    constructor(
        private userService:UsersService,
        private jwtService: JwtService
         ){}

    /**
     * @param email 
     * @param pass 
     */
    async validateUser(email:string, pass:string):Promise<Users>{
        const user = await this.userService.getUserByEmail(email)
        if(user){
           const {password} = user
           const match = await comparePassword(pass,password); 
           if(match){
            return user 
           }else{
            throw new Error('No valide password');
           }
        }
        throw new Error('loggedIn failed')
    }

    async login(user:any){
        // get user from db
        const userDB = await this.userService.getUserByEmail(user.email)
        const payload = {email: user.email, sub:user._id, userDB:userDB}
        return {
             access_token:this.jwtService.sign(payload)
        }
    }
}
