import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsNotEmpty,
  IsPhoneNumber,
} from 'class-validator';
import { Address } from 'src/models/address.schema';
import { Roles } from 'src/models/roles.schema';
export class CreateUserDTO {
  @IsNotEmpty()
  @Length(4, 15)
  username: string;

  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber('BE')
  phone: string;

  @IsNotEmpty()
  @Length(4, 15)
  password: string;

  address: Address;

  @IsNotEmpty()
  roles:Roles;
}
