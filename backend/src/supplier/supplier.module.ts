import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from 'src/models/country.schema';
import { Supplier, SupplierSchema } from 'src/models/supplier.schema';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Supplier.name,
        schema: SupplierSchema,
      },
      {
        name: Country.name,
        schema: CountrySchema,
      }
    ])
  ],
  controllers: [SupplierController],
  providers: [SupplierService]
})
export class SupplierModule {}
