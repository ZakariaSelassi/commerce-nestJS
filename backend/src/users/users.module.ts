import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Address, AddressSchema } from 'src/models/address.schema';
import { Roles, RolesSchema } from 'src/models/roles.schema';
import { Users, UsersSchema } from 'src/models/users.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema,
      },
      {
        name: Roles.name,
        schema: RolesSchema,
      },
      {
        name:Address.name,
        schema: AddressSchema
      }
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
