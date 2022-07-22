import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/models/product.schema';
import { Category, CategorySchema } from 'src/models/category.schema';
import { Supplier, SupplierSchema } from 'src/models/supplier.schema';

@Module({
  imports:[ MongooseModule.forFeature([
      {
      name: Product.name,
      schema: ProductSchema
      },
      {
      name:Category.name,
      schema: CategorySchema
      },
      {
      name:Supplier.name,
      schema:SupplierSchema
      },
])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
