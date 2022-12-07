import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutServerInputObjectSchema } from './RoleCreateWithoutServerInput.schema';
import { RoleUncheckedCreateWithoutServerInputObjectSchema } from './RoleUncheckedCreateWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateOrConnectWithoutServerInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleCreateWithoutServerInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutServerInputObjectSchema),
    ]),
  })
  .strict();

export const RoleCreateOrConnectWithoutServerInputObjectSchema = Schema;
