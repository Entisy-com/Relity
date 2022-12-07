import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutMentionedInInputObjectSchema } from './RoleUpdateWithoutMentionedInInput.schema';
import { RoleUncheckedUpdateWithoutMentionedInInputObjectSchema } from './RoleUncheckedUpdateWithoutMentionedInInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutMentionedInInput> =
  z
    .object({
      where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RoleUpdateWithoutMentionedInInputObjectSchema),
        z.lazy(() => RoleUncheckedUpdateWithoutMentionedInInputObjectSchema),
      ]),
    })
    .strict();

export const RoleUpdateWithWhereUniqueWithoutMentionedInInputObjectSchema =
  Schema;
