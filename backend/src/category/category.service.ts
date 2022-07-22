import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/models/category.schema';
import { CreateCategoryDto } from './dto/CreateCategory.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private CategoryModel:Model<CategoryDocument>) {}

    async findAll(): Promise<Category[]> {
        return await this.CategoryModel.find().exec();
    }

    async findOne(id: string): Promise<Category> {
        return await this.CategoryModel.findById(id).exec();
    }

    async create(createCategoryDTO: CreateCategoryDto): Promise<Category> {
        const createdCategory = new this.CategoryModel(createCategoryDTO);
        return await createdCategory.save();
    }
    
    async update(id: string, createCategoryDTO: CreateCategoryDto): Promise<Category> {
        return await this.CategoryModel.findByIdAndUpdate(id, createCategoryDTO, { new: true });
    }

    async delete(id: string): Promise<Category> {
        return await this.CategoryModel.findByIdAndRemove(id);
    }
}
