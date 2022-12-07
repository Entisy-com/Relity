import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutMentionedInInputObjectSchema } from './RoleCreateWithoutMentionedInInput.schema';
import { RoleUncheckedCreateWithoutMentionedInInputObjectSchema } from './RoleUncheckedCreateWithoutMentionedInInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateOrConnectWithoutMentionedInInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleCreateWithoutMentionedInInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutMentionedInInputObjectSchema),
    ]),
  })
  .strict();

export const RoleCreateOrConnectWithoutMentionedInInputObjectSchema = Schema;
