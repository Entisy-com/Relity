import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    pfp: z.string().optional().nullable(),
    banner: z.string().optional().nullable(),
    nickname: z.string().optional().nullable(),
    voiceChannelId: z.string().optional().nullable(),
    serverId: z.string().optional().nullable(),
  })
  .strict();

export const MemberCreateManyUserInputObjectSchema = Schema;
