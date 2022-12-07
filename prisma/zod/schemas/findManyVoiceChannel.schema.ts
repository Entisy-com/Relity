import { z } from 'zod';
import { VoiceChannelWhereInputObjectSchema } from './objects/VoiceChannelWhereInput.schema';
import { VoiceChannelOrderByWithRelationInputObjectSchema } from './objects/VoiceChannelOrderByWithRelationInput.schema';
import { VoiceChannelWhereUniqueInputObjectSchema } from './objects/VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelScalarFieldEnumSchema } from './enums/VoiceChannelScalarFieldEnum.schema';

export const VoiceChannelFindManySchema = z.object({
  where: VoiceChannelWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VoiceChannelOrderByWithRelationInputObjectSchema,
      VoiceChannelOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: VoiceChannelWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VoiceChannelScalarFieldEnumSchema).optional(),
});
