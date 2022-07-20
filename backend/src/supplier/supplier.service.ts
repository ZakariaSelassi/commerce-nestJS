import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Supplier, SupplierDocument } from 'src/models/supplier.schema';
import { CreateSupplierDTO } from './dto/CreateSupplier.dto';

@Injectable()
export class SupplierService {

    constructor(@InjectModel(Supplier.name) private SupplierModel:Model<SupplierDocument>) {}


    async create(createSupplierDTO:CreateSupplierDTO):Promise<SupplierDocument>{
        const newSupplier = new this.SupplierModel(createSupplierDTO);
        return await newSupplier.save();
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
