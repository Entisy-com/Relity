import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    pfp: z.literal(true).optional(),
    banner: z.literal(true).optional(),
    nickname: z.literal(true).optional(),
    voiceChannelId: z.literal(true).optional(),
    serverId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const MemberCountAggregateInputObjectSchema = Schema;
