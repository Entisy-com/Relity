import { z } from 'zod';
import { ActionTypeScalarWhereInputObjectSchema } from './ActionTypeScalarWhereInput.schema';
import { ActionTypeUpdateManyMutationInputObjectSchema } from './ActionTypeUpdateManyMutationInput.schema';
import { ActionTypeUncheckedUpdateManyWithoutActionTypeInputObjectSchema } from './ActionTypeUncheckedUpdateManyWithoutActionTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeUpdateManyWithWhereWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => ActionTypeScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ActionTypeUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ActionTypeUncheckedUpdateManyWithoutActionTypeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ActionTypeUpdateManyWithWhereWithoutMemberInputObjectSchema =
  Schema;
