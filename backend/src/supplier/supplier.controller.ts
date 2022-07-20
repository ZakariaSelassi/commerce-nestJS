import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SupplierService } from './supplier.service';

@Controller('supplier')
export class SupplierController {
    constructor(private supplierService:SupplierService) {}

    @Get('')
    async findAll():Promise<any>{
        return await this.supplierService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id:string):Promise<any>{
        return await this.supplierService.findOne(id);
    }

    @Post('')
    async create(@Body() createSupplierDTO:any):Promise<any>{
        return await this.supplierService.create(createSupplierDTO);
    }

    @Patch('/:id')
    async update(@Param('id') id:string, @Body() createSupplierDTO:any):Promise<any>{
        return await this.supplierService.update(id, createSupplierDTO);
    }

    @Delete('/:id')
    async delete(@Param('id') id:string):Promise<any>{
        return await this.supplierService.delete(id);
    }
    
}
