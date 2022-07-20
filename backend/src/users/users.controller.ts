import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAddressDTO } from 'src/address/dto/CreateAddress.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService ) {}

  @UseGuards(JwtAuthGuard)
  @Get(':email')
  async userBydUsername(@Param('email') email:string){
    return this.userService.getUserByEmail(email);
  }

  @Get('')
  @UseGuards(JwtAuthGuard)
  allUsers() {
    return this.userService.getAllUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('search/:id')
  @UseGuards(JwtAuthGuard)
  async userById(@Param('id') id: string) {
    return  await this.userService.getUserById(id);

  }

/*   @Post('/add')
  @UsePipes(ValidationPipe)
  addUser(@Body() createUserDTO: CreateUserDTO) {
    const newUser = this.userService.createUser(createUserDTO);
    return newUser;
  } */

  @Delete('/delete/:id')
  @UseGuards(JwtAuthGuard)
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Patch('/update/:id')
  updateUser(@Param('id') id: string, @Body() createAddressDTO: CreateAddressDTO) {
    return this.userService.addUserAddress(id, createAddressDTO);
  }

}
