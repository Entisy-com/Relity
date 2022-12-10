import { z } from 'zod';

export const ServerSettingsScalarFieldEnumSchema = z.enum([
  'id',
  'serverid',
  'logRoleUpdates',
  'logMemberUpdates',
  'logChannelUpdates',
  'logMessageUpdates',
  'logMessages',
  'logJoinLeave',
  'notifyUnban',
  'notifyBan',
  'notifyKick',
  'showBadges',
]);
