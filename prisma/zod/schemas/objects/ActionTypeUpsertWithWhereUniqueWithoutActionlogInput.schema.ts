import { z } from 'zod';
import { ActionTypeWhereUniqueInputObjectSchema } from './ActionTypeWhereUniqueInput.schema';
import { ActionTypeUpdateWithoutActionlogInputObjectSchema } from './ActionTypeUpdateWithoutActionlogInput.schema';
import { ActionTypeUncheckedUpdateWithoutActionlogInputObjectSchema } from './ActionTypeUncheckedUpdateWithoutActionlogInput.schema';
import { ActionTypeCreateWithoutActionlogInputObjectSchema } from './ActionTypeCreateWithoutActionlogInput.schema';
import { ActionTypeUncheckedCreateWithoutActionlogInputObjectSchema } from './ActionTypeUncheckedCreateWithoutActionlogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeUpsertWithWhereUniqueWithoutActionlogInput> =
  z
    .object({
      where: z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ActionTypeUpdateWithoutActionlogInputObjectSchema),
        z.lazy(
          () => ActionTypeUncheckedUpdateWithoutActionlogInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ActionTypeCreateWithoutActionlogInputObjectSchema),
        z.lazy(
          () => ActionTypeUncheckedCreateWithoutActionlogInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ActionTypeUpsertWithWhereUniqueWithoutActionlogInputObjectSchema =
  Schema;
