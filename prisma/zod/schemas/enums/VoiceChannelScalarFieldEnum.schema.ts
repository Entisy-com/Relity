import { z } from 'zod';

export const VoiceChannelScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'serverid',
  'createdAt',
  'updatedAt',
  'categoryid',
  'permissions',
  'position',
]);
