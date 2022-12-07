import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutMembersInputObjectSchema } from './RoleCreateWithoutMembersInput.schema';
import { RoleUncheckedCreateWithoutMembersInputObjectSchema } from './RoleUncheckedCreateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateOrConnectWithoutMembersInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleCreateWithoutMembersInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutMembersInputObjectSchema),
    ]),
  })
  .strict();

export const RoleCreateOrConnectWithoutMembersInputObjectSchema = Schema;
