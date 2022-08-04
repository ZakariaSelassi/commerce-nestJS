import { SetMetadata } from "@nestjs/common";
import { Role } from "src/models/enums/role.enum";


/* This decorator allow to specify which roles are required to access specific ressources  */

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);