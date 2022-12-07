import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutServerInputObjectSchema } from './RoleUpdateWithoutServerInput.schema';
import { RoleUncheckedUpdateWithoutServerInputObjectSchema } from './RoleUncheckedUpdateWithoutServerInput.schema';
import { RoleCreateWithoutServerInputObjectSchema } from './RoleCreateWithoutServerInput.schema';
import { RoleUncheckedCreateWithoutServerInputObjectSchema } from './RoleUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutServerInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RoleUpdateWithoutServerInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutServerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoleCreateWithoutServerInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutServerInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpsertWithWhereUniqueWithoutServerInputObjectSchema = Schema;
