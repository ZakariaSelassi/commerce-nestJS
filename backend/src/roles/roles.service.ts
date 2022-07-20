import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Roles, RolesDocument } from 'src/models/roles.schema';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Roles.name) private RolesModel: Model<RolesDocument>,
  ) {}

  async findAll(): Promise<Roles[]> {
    return await this.RolesModel.find({}).exec();
  }
  async createRoles(name: string): Promise<Roles> {
    return await this.RolesModel.create(name);
  }
}
