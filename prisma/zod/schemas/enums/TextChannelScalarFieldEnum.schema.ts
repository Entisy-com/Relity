import { z } from 'zod';

export const TextChannelScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'serverid',
  'createdAt',
  'updatedAt',
  'categoryid',
  'permissions',
  'position',
]);
