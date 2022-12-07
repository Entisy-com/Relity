import { z } from 'zod';
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema';
import { RoleUpdateManyMutationInputObjectSchema } from './RoleUpdateManyMutationInput.schema';
import { RoleUncheckedUpdateManyWithoutMentionedRolesInputObjectSchema } from './RoleUncheckedUpdateManyWithoutMentionedRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutMentionedInInput> =
  z
    .object({
      where: z.lazy(() => RoleScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RoleUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => RoleUncheckedUpdateManyWithoutMentionedRolesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleUpdateManyWithWhereWithoutMentionedInInputObjectSchema =
  Schema;
