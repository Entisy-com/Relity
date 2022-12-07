import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutMembersInputObjectSchema } from './RoleUpdateWithoutMembersInput.schema';
import { RoleUncheckedUpdateWithoutMembersInputObjectSchema } from './RoleUncheckedUpdateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutMembersInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RoleUpdateWithoutMembersInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutMembersInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpdateWithWhereUniqueWithoutMembersInputObjectSchema = Schema;
