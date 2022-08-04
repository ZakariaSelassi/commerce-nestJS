import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller('')
export class AppController {


    constructor(private authService:AuthService){}

    @UseGuards(LocalAuthGuard) // this mean taht the route will only be invoked if the user has been validated
    @Post('login')
    login(@Request() req):any{
        console.log(req.user)
        return this.authService.login(req.user);
    }


    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user
    }
}
