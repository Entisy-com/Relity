import { z } from 'zod';

export const AdminUserScalarFieldEnumSchema = z.enum([
  'id',
  'userid',
  'createdAt',
  'updatedAt',
]);
