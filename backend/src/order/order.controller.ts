import { Controller, Get, UseGuards,Req, Post, Param, Body } from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Product } from 'src/models/product.schema';
import { Users } from 'src/models/users.schema';
import { CreateOrderDTO } from './dto/CreateOrder.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService:OrderService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    async findClientOrders(id: string, @Req() request:Request  ): Promise<any> {
        console.log(request.user);
        
        return this.orderService.findAllClientOrders(id);
    }


    @UseGuards(JwtAuthGuard)
    @Post('/add/:idProduct')
    async createOrder(
        @Param('id') id:string,
        @Body() orderDto:CreateOrderDTO,
        @Req() request:Users  ): Promise<any> {
        
        console.log("product : ", id) 
        return this.orderService.createOrder(id, orderDto, request);
    }
}
