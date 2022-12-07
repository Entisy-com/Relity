import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MemberScalarWhereInputObjectSchema),
        z.lazy(() => MemberScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MemberScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MemberScalarWhereInputObjectSchema),
        z.lazy(() => MemberScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    pfp: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    banner: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    nickname: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    voiceChannelId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    serverId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const MemberScalarWhereInputObjectSchema = Schema;
