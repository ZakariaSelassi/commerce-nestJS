import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAddressDTO } from 'src/address/dto/CreateAddress.dto';
import { Address,AddressDocument } from 'src/models/address.schema';
import { Roles, RolesDocument } from 'src/models/roles.schema';
import { Users, UsersDocument } from 'src/models/users.schema';
import { encodePassword } from 'src/utils/bcrypte';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { LoginUserDTO } from './dto/LoginUser.dto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private UsersModel: Model<UsersDocument>,
    @InjectModel(Roles.name) private RolesModel: Model<RolesDocument>,
    @InjectModel(Address.name) private AddressModel : Model<AddressDocument>
  ) {}

  async getUserByEmail(email:string):Promise<Users> {
    return await this.UsersModel.findOne({email})
  }

  async getAllUsers(): Promise<Users[]> {
    return await this.UsersModel.find({}).exec();
  }

  async getUserById(id: string): Promise<Users> {
    const user = await this.UsersModel.findById(id.toString()).exec();
    const addressID = await this.AddressModel.findById(user.address)
    if (!user)
      throw new HttpException(
        `No user found with id : ${id}!`,
        HttpStatus.BAD_REQUEST,
      );

    if (user)
      return new UserEntity({
        id: id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        phone: user.phone,
        // address can be null
        address: addressID ? {
          street: addressID.street,
          city: addressID.city,
          country: addressID.country,
          zip: addressID.zip,
        } : null,
        roles: user.roles,
      });
    throw new Error('User not found');
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<Users> {
    const { email, username, roles , password} = createUserDTO;
    const usernameExist = await this.UsersModel.exists({ username: username });
    const emailExist = await this.UsersModel.exists({ email: email });
    const roleExist = await this.RolesModel.findOne({ roleName: roles });

    if (!roleExist)
      throw new HttpException(
        'Role should be client, seller or admin!',
        HttpStatus.BAD_REQUEST,
      );
    if (usernameExist || emailExist)
      throw new HttpException(
        'Username/email Already Exist',
        HttpStatus.BAD_REQUEST,
      );

    const hashPass = await encodePassword(password)
    const newUser = await this.UsersModel.create({
      ...createUserDTO,
      password:hashPass,
      roles: roleExist._id,
      address:null,
    });

    if (!newUser)
      throw new HttpException('No user created!', HttpStatus.BAD_REQUEST);

    return newUser;
  }

  async deleteUser(id: string): Promise<void> {
    const currentUser = this.getUserById(id);
    await this.UsersModel.deleteOne({ id: currentUser }).exec();
  }
  /**
   * @Description : get id of user , create address for the current user then update the userModel for adresse value ( null => newAddress)
   */
  async addUserAddress(id:string , createAddressDTO:CreateAddressDTO){
    const user = this.getUserById(id);
    const newAddress = await this.AddressModel.create(createAddressDTO)  
    if(!user) throw new Error("User not found !")
    if(!newAddress) throw new Error("No address created!")
    const updatedUser = await this.UsersModel.findByIdAndUpdate(id.toString(),{
      ...user,
      address:newAddress._id
    },{new: true}).exec()

    if(!updatedUser) throw new Error("No user updated!")
    return updatedUser.save()

  }
}
