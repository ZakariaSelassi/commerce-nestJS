import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country, CountryDocument } from 'src/models/country.schema';
import { Supplier, SupplierDocument } from 'src/models/supplier.schema';
import { CreateSupplierDTO } from './dto/CreateSupplier.dto';

@Injectable()
export class SupplierService {

    constructor(
        @InjectModel(Supplier.name) private SupplierModel: Model<SupplierDocument>,
        @InjectModel(Country.name) private CountryModel: Model<CountryDocument>) {}


    async create(createSupplierDTO:CreateSupplierDTO):Promise<SupplierDocument>{
        const {supplierCountry, supplierName} = createSupplierDTO
    
        const countryExists = await this.CountryModel.findOne({supplierCountry: supplierCountry}).exec();
        if(!countryExists){
            throw new Error('Country does not exist');
        }
        // check if supplier already exists
        const supplierExists = await this.SupplierModel.findOne({supplierName: supplierName}).exec();
        if(supplierExists){
            throw new Error('Supplier already exists');
        }
        console.log(countryExists)
        const supplier = await this.SupplierModel.create({...createSupplierDTO, countryName: countryExists._id});
        return await supplier.save();
    }
    async findAll():Promise<SupplierDocument[]>{
        return await this.SupplierModel.find().exec();
    }

    async findOne(id:string):Promise<SupplierDocument>{
        return await this.SupplierModel.findById(id).exec();
    }
    async update(id:string, createSupplierDTO:CreateSupplierDTO):Promise<SupplierDocument>{
        return await this.SupplierModel.findByIdAndUpdate(id, createSupplierDTO, {new:true}).exec();
    }
    async delete(id:string):Promise<SupplierDocument>{
        return await this.SupplierModel.findByIdAndDelete(id).exec();
    }

}
