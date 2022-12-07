import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutMembersInputObjectSchema } from './RoleUpdateWithoutMembersInput.schema';
import { RoleUncheckedUpdateWithoutMembersInputObjectSchema } from './RoleUncheckedUpdateWithoutMembersInput.schema';
import { RoleCreateWithoutMembersInputObjectSchema } from './RoleCreateWithoutMembersInput.schema';
import { RoleUncheckedCreateWithoutMembersInputObjectSchema } from './RoleUncheckedCreateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutMembersInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RoleUpdateWithoutMembersInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutMembersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoleCreateWithoutMembersInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutMembersInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpsertWithWhereUniqueWithoutMembersInputObjectSchema = Schema;
