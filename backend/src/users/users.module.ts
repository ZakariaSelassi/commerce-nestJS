import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Address, AddressSchema } from 'src/models/address.schema';
import { Users, UsersSchema } from 'src/models/users.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guard/role.guard';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema,
      },
      {
        name:Address.name,
        schema: AddressSchema
      }
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService,{provide: APP_GUARD, useClass: RolesGuard,}],
  exports:[UsersService]
})
export class UsersModule {}
