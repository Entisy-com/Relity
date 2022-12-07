import { z } from 'zod';

export const MemberScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'pfp',
  'banner',
  'nickname',
  'voiceChannelId',
  'serverId',
]);
