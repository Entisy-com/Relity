import { z } from 'zod';

export const UserSettingsScalarFieldEnumSchema = z.enum([
  'id',
  'userid',
  'notifyUnban',
  'notifyBan',
  'notifyKick',
]);
