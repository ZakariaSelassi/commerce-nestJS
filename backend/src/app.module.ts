import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AddressModule } from './address/address.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { CountryModule } from './country/country.module';
import { SupplierModule } from './supplier/supplier.module';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
  ConfigModule.forRoot(),  
  UsersModule,
  MongooseModule.forRoot('mongodb+srv://root:root@commerce-cluster.nyt28.mongodb.net/dbcommerce'),
  AddressModule,
  RolesModule,
  AuthModule,
  CountryModule,
  SupplierModule,
  CategoryModule,
  ProductsModule,
  OrderModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
