import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductsDTO } from './dto/CreateProducts.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private productService:ProductsService){}


    @Get('')
    getAll(){
        return this.productService.findAll()
    }

    @Get('/:id')
    productById(@Param('id') id:string){
        return this.productService.findOne(id)
    }
    @Post('')
    create(@Body() createProductsDTO:CreateProductsDTO){
        console.log(createProductsDTO)
        return this.productService.createProducts(createProductsDTO)
    }

    @Put('/update/:id')
    update(@Param('id') id:string, @Body() createProductsDTO:CreateProductsDTO){
        return this.productService.updateProduct(id,createProductsDTO)
    }
}
