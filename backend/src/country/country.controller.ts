import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDTO } from './dto/CreateCountry.dto';

@Controller('country')
export class CountryController {
    constructor(private countryService:CountryService) {}

    @Get('')
    async getAllCountries(): Promise<any> {
        return await this.countryService.getAllCountries();
    }

    @Get('search/:id')
    async getCountryById(@Param('id') id: string): Promise<any> {
        return await this.countryService.getCountryById(id);
    }

    @Post('/add')
    async createCountry(@Body() createCountryDTO: CreateCountryDTO): Promise<any> {
    
        return await this.countryService.createCountry(createCountryDTO);
    }
    @Patch('/update/:id')
    async updateCountry(@Param('id') id: string, @Body() createCountryDTO: CreateCountryDTO): Promise<any> {
        return await this.countryService.updateCountry(id, createCountryDTO);
    }

    @Delete('/delete/:id')
    async deleteCountry(@Param('id') id: string): Promise<any> {
        return await this.countryService.deleteCountry(id);
    }

}
