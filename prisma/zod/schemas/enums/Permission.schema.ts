import { z } from 'zod';

export const PermissionSchema = z.enum([
  'BAN_MEMBERS',
  'KICK_MEMBERS',
  'MANAGE_MEMBERS',
  'MANAGE_MESSAGES',
  'MANAGE_SERVER',
  'READ_MESSAGES',
  'SEND_MESSAGES',
]);
