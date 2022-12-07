import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutMentionedInInputObjectSchema } from './RoleUpdateWithoutMentionedInInput.schema';
import { RoleUncheckedUpdateWithoutMentionedInInputObjectSchema } from './RoleUncheckedUpdateWithoutMentionedInInput.schema';
import { RoleCreateWithoutMentionedInInputObjectSchema } from './RoleCreateWithoutMentionedInInput.schema';
import { RoleUncheckedCreateWithoutMentionedInInputObjectSchema } from './RoleUncheckedCreateWithoutMentionedInInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutMentionedInInput> =
  z
    .object({
      where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RoleUpdateWithoutMentionedInInputObjectSchema),
        z.lazy(() => RoleUncheckedUpdateWithoutMentionedInInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RoleCreateWithoutMentionedInInputObjectSchema),
        z.lazy(() => RoleUncheckedCreateWithoutMentionedInInputObjectSchema),
      ]),
    })
    .strict();

export const RoleUpsertWithWhereUniqueWithoutMentionedInInputObjectSchema =
  Schema;
