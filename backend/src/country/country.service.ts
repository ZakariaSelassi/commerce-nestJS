import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country, CountryDocument } from 'src/models/country.schema';
import { CreateCountryDTO } from './dto/CreateCountry.dto';

@Injectable()
export class CountryService {


    constructor(@InjectModel(Country.name) private CountryModel:Model<CountryDocument>) { }

    async getAllCountries(): Promise<Country[]> {
        return await this.CountryModel.find({}).exec();
    }

    async getCountryById(id: string): Promise<Country> {
        const country = await this.CountryModel.findById(id.toString()).exec();
        if (!country)
            throw new HttpException(
                `No country found with id : ${id}!`,
                HttpStatus.BAD_REQUEST,
            );

        if (country) return country
        throw new Error('Country not found');
    }

    async createCountry(createCountryDTO: CreateCountryDTO): Promise<Country> {
        const { countryName } = createCountryDTO;

        const countryExist = await this.CountryModel.findOne({ countryName }).exec();
        console.log(countryExist);
        if (countryExist)
            throw new HttpException('Country already exist', HttpStatus.BAD_REQUEST);
    
        const country = await this.CountryModel.create(createCountryDTO);
        return await country.save();
    }

    async updateCountry(id: string, createCountryDTO: CreateCountryDTO): Promise<Country> {
        const { countryName} = createCountryDTO;
        const country = await this.CountryModel.findByIdAndUpdate(id.toString(), {
            countryName,
        },{new: true}).exec();

        if (!country)
            throw new HttpException(
                `No country found with id : ${id}!`,
                HttpStatus.BAD_REQUEST,
            );

        if (country) return country;
        throw new Error('Country not found');
    }

    async deleteCountry(id: string): Promise<Country> {
        const country = await this.CountryModel.findByIdAndRemove(id.toString()).exec();
        if (!country)
            throw new HttpException(
                `No country found with id : ${id}!`,
                HttpStatus.BAD_REQUEST,
            );

        if (country)
            return country;
        throw new Error('Country not found');
    }
}
