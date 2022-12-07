import { z } from 'zod';

export const ActionTypeScalarFieldEnumSchema = z.enum([
  'id',
  'memberId',
  'action',
  'actionlogid',
  'createdAt',
]);
