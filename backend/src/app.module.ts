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

@Module({
  imports: [
  ConfigModule.forRoot(),  
  UsersModule,
  MongooseModule.forRoot('mongodb+srv://root:root@commerce-cluster.nyt28.mongodb.net/dbcommerce'),
  AddressModule,
  RolesModule,
  AuthModule,
  CountryModule,
  SupplierModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
