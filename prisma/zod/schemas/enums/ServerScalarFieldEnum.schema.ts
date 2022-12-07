import { z } from 'zod';

export const ServerScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'ownerid',
  'pfp',
  'banner',
  'updatedAt',
  'createdAt',
]);
