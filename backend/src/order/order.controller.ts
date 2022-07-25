import { Controller, Get, UseGuards,Req, Post, Param, Body } from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Order } from 'src/models/order.schema';
import { Product } from 'src/models/product.schema';
import { Users } from 'src/models/users.schema';
import { CreateOrderDTO } from './dto/CreateOrder.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService:OrderService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    async findClientOrders(@Param('id') id:string):Promise<Order[]> {

        return this.orderService.findAllClientOrders(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('/add/:idProduct')
    async createOrder(
        @Param('idProduct') id:string,
        @Body() orderDto:CreateOrderDTO,
        @Req() request:Request  ): Promise<any> {
        return this.orderService.createOrder(id, orderDto, request.user);
    }
}
