import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";
import { jwtConstants } from "../constants/constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(private userService:UsersService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        })
    }

    /***
     *  The validate() method deserves some discussion. For the jwt-strategy, 
     *  Passport first verifies the JWT's signature and decodes the JSON. It then invokes our validate() method passing the decoded JSON as its single parameter.
     *  Based on the way JWT signing works, we're guaranteed that we're receiving a valid token that we have previously signed and issued to a valid user.
     */

    async validate(payload:any){
        
        const user = await this.userService.getUserById(payload.sub)

        return {
        ...user}
    }
}