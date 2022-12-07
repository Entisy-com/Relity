import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutServerInputObjectSchema } from './RoleUpdateWithoutServerInput.schema';
import { RoleUncheckedUpdateWithoutServerInputObjectSchema } from './RoleUncheckedUpdateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutServerInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RoleUpdateWithoutServerInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutServerInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpdateWithWhereUniqueWithoutServerInputObjectSchema = Schema;
