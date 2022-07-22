import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/CreateCategory.dto';

@Controller('category')
export class CategoryController {

    constructor(private categoryService:CategoryService) {}

    @Get('')
    async findAll(): Promise<any> {
        return await this.categoryService.findAll();
    }
    @Get('/:id')
    async findOne(id: string): Promise<any> {
        return await this.categoryService.findOne(id);
    }

    @Post('')
    async create(@Body() createCategoryDTO: CreateCategoryDto): Promise<any> {
        console.log(createCategoryDTO);
        return await this.categoryService.create(createCategoryDTO);
    }

}
