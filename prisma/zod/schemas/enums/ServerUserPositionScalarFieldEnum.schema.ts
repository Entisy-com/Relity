import { z } from 'zod';

export const ServerUserPositionScalarFieldEnumSchema = z.enum([
  'id',
  'serverId',
  'userId',
  'position',
]);
