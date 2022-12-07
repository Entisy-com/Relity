import { z } from 'zod';
import { VoiceChannelCreateWithoutMembersInputObjectSchema } from './VoiceChannelCreateWithoutMembersInput.schema';
import { VoiceChannelUncheckedCreateWithoutMembersInputObjectSchema } from './VoiceChannelUncheckedCreateWithoutMembersInput.schema';
import { VoiceChannelCreateOrConnectWithoutMembersInputObjectSchema } from './VoiceChannelCreateOrConnectWithoutMembersInput.schema';
import { VoiceChannelUpsertWithoutMembersInputObjectSchema } from './VoiceChannelUpsertWithoutMembersInput.schema';
import { VoiceChannelWhereUniqueInputObjectSchema } from './VoiceChannelWhereUniqueInput.schema';
import { VoiceChannelUpdateWithoutMembersInputObjectSchema } from './VoiceChannelUpdateWithoutMembersInput.schema';
import { VoiceChannelUncheckedUpdateWithoutMembersInputObjectSchema } from './VoiceChannelUncheckedUpdateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceChannelUpdateOneWithoutMembersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => VoiceChannelCreateWithoutMembersInputObjectSchema),
          z.lazy(
            () => VoiceChannelUncheckedCreateWithoutMembersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => VoiceChannelCreateOrConnectWithoutMembersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => VoiceChannelUpsertWithoutMembersInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => VoiceChannelWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => VoiceChannelUpdateWithoutMembersInputObjectSchema),
          z.lazy(
            () => VoiceChannelUncheckedUpdateWithoutMembersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const VoiceChannelUpdateOneWithoutMembersNestedInputObjectSchema =
  Schema;
