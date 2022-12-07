import { z } from 'zod';

export const MessageScalarFieldEnumSchema = z.enum([
  'id',
  'content',
  'authorId',
  'color',
  'backgroundColor',
  'createdAt',
  'updatedAt',
  'textChannelId',
]);
