import { Body, Controller, Get, Post } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

    constructor(private readonly rolesService:RolesService){}

    @Get('')
    getRoles(){
        return this.rolesService.findAll()
    }

    @Post('/add')
    createRole(@Body() name:string){
        console.log("name :",name)
        return this.rolesService.createRoles(name);
    }
}
