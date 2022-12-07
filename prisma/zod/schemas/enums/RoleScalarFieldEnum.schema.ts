import { z } from 'zod';

export const RoleScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'permissions',
  'serverid',
  'createdAt',
  'updatedAt',
  'visible',
  'color',
  'position',
]);
