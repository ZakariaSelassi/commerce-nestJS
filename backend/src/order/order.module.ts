import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/models/order.schema';
import { Product, ProductSchema } from 'src/models/product.schema';
import { Users, UsersSchema } from 'src/models/users.schema';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [MongooseModule.forFeature([{
     name: Order.name, 
     schema: OrderSchema },
    {
      name: Product.name,
      schema: ProductSchema,
    },
  {
    name: Users.name,
    schema: UsersSchema,
  }])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
