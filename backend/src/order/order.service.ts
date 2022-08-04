import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from 'src/models/order.schema';
import { Product, ProductDocument } from 'src/models/product.schema';
import { Users, UsersDocument } from 'src/models/users.schema';
import { CreateOrderDTO } from './dto/CreateOrder.dto';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order.name) private OrderModel: Model<OrderDocument>,
        @InjectModel(Users.name) private UsersModel: Model<UsersDocument>,
        @InjectModel(Product.name) private ProductModel: Model<ProductDocument>
        ){}
    

    async findAll(){
        return await this.OrderModel.find().exec();
    }   
    async findAllClientOrders(user:any) /* Promise<Order[]> */ {
        const userId = user.id;
        console.log(userId)
        const orders = await this.OrderModel.find().where('user').equals(userId).exec();
        return orders;
    }

    // create order for a specif client and change stock amount remaining
    async createOrder(id:string, orderDto:CreateOrderDTO, user:any): Promise<Order> {

        // check if product is available
        const product = await this.ProductModel.findById(id);
        if(product.stock < orderDto.quantity){
            throw new HttpException(`Not enough stock - left ${product.stock}`, HttpStatus.BAD_REQUEST);
        }
        // update stock amount remaining
        product.stock = product.stock - orderDto.quantity;
        
         await product.save();

      
        // calculate price for the order (produict price * quantity)
        const totalPrice = product.productPrice * orderDto.quantity;
        // create order
         const order = await this.OrderModel.create({
          user: user.id,
          product: id,
          quantity: orderDto.quantity,
          status: "pending",
          price: totalPrice,
          dateOrdered: new Date()
        });

        return order.save();
    }



}
