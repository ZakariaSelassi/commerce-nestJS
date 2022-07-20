import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address, AddressDocument } from 'src/models/address.schema';

@Injectable()
export class AddressService {
    constructor(@InjectModel(Address.name) private  addressModel:Model<AddressDocument>){}

    async getAllAddress():Promise<Address[]>{
        return this.addressModel.find({}).exec()
    }

}
