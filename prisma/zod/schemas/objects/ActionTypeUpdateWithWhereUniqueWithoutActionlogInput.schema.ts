import { z } from 'zod';
import { ActionTypeWhereUniqueInputObjectSchema } from './ActionTypeWhereUniqueInput.schema';
import { ActionTypeUpdateWithoutActionlogInputObjectSchema } from './ActionTypeUpdateWithoutActionlogInput.schema';
import { ActionTypeUncheckedUpdateWithoutActionlogInputObjectSchema } from './ActionTypeUncheckedUpdateWithoutActionlogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeUpdateWithWhereUniqueWithoutActionlogInput> =
  z
    .object({
      where: z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ActionTypeUpdateWithoutActionlogInputObjectSchema),
        z.lazy(
          () => ActionTypeUncheckedUpdateWithoutActionlogInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ActionTypeUpdateWithWhereUniqueWithoutActionlogInputObjectSchema =
  Schema;
