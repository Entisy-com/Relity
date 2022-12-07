import { z } from 'zod';
import { ActionTypeScalarWhereInputObjectSchema } from './ActionTypeScalarWhereInput.schema';
import { ActionTypeUpdateManyMutationInputObjectSchema } from './ActionTypeUpdateManyMutationInput.schema';
import { ActionTypeUncheckedUpdateManyWithoutActionsInputObjectSchema } from './ActionTypeUncheckedUpdateManyWithoutActionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeUpdateManyWithWhereWithoutActionlogInput> =
  z
    .object({
      where: z.lazy(() => ActionTypeScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ActionTypeUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ActionTypeUncheckedUpdateManyWithoutActionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ActionTypeUpdateManyWithWhereWithoutActionlogInputObjectSchema =
  Schema;
