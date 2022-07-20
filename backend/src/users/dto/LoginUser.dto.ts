import { IsNotEmpty, IsString, MaxLength, MinLength, minLength } from "class-validator";

export class LoginUserDTO{

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    password:string;
}