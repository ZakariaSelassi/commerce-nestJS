import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SupplierSchema } from 'src/models/supplier.schema';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: SupplierService.name,
        schema: SupplierSchema,
      
      }
    ])
  ],
  controllers: [SupplierController],
  providers: [SupplierService]
})
export class SupplierModule {}
