import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/models/category.schema';
import { Product, ProductDocument } from 'src/models/product.schema';
import { Supplier, SupplierDocument } from 'src/models/supplier.schema';
import { CreateProductsDTO } from './dto/CreateProducts.dto';
import { ProductEntity } from './entity/ProductEntity';

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name) private productsModel:Model<ProductDocument>,
        @InjectModel(Supplier.name) private supplierModel:Model<SupplierDocument>,
        @InjectModel(Category.name) private categoryModel:Model<CategoryDocument>,
        ) {}

    async findAll(): Promise<Product[]> {
        return await this.productsModel.find().exec();
    }

    async findOne(id: string): Promise<Product> {
        const product = await this.productsModel.findById(id).exec();
        const category = await this.categoryModel.findById(product.category).exec()
        const supplier = await this.supplierModel.findById(product.supplier).exec()
        if(!product)  throw new HttpException(
            `No user found with id : ${id}!`,
            HttpStatus.BAD_REQUEST,
          );
        if(product){
            return new ProductEntity({
                id: id,
                productName: product.productName,
                productDescription: product.productDescription,
                productPrice: product.productPrice,
                stock: product.stock,
                category: category ? {categoryName: category.categoryName} : null,
            })
        }
     
    }

    async createProducts(createProductsDTO:CreateProductsDTO): Promise<Product>{
        const {category,supplier} = createProductsDTO
        
        const categoryExist = await this.categoryModel.findOne({categoryName:category}).exec()
        const supplierExist = await this.supplierModel.findOne({supplierName:supplier}).exec()

        if(!categoryExist) throw new Error('Category not found')
        if(!supplierExist) throw new Error('Supplier not found')

        const newProduct = await this.productsModel.create({
            ...createProductsDTO,
            category: categoryExist._id,
            supplier: supplierExist._id,
        })

        return newProduct.save()
    }


    async updateProduct(id: string, createProductsDTO:CreateProductsDTO): Promise<Product> {
        const {category,supplier} = createProductsDTO
        
        const categoryExist = await this.categoryModel.findOne({categoryName:category}).exec()
        const supplierExist = await this.supplierModel.findOne({supplierName:supplier}).exec()

        if(!categoryExist) throw new Error('Category not found')
        if(!supplierExist) throw new Error('Supplier not found')

        const product = await this.productsModel.findById(id).exec()
        if(!product) throw new Error('Product not found')
        const updatedProduct = await this.productsModel.findByIdAndUpdate(id,{
            ...createProductsDTO,
            category: categoryExist._id,
            supplier: supplierExist._id,
        },{new:true}).exec()
        return updatedProduct
    }
    
    async deleteProduct(id: string): Promise<Product> {
        const product = await this.productsModel.findById(id).exec();
        if (!product)
          throw new HttpException(
            `No user found with id : ${id}!`,
            HttpStatus.BAD_REQUEST,
          );
        return await this.productsModel.findByIdAndDelete(id).exec();
    }

}
