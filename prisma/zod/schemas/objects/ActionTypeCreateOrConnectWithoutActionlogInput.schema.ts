import { z } from 'zod';
import { ActionTypeWhereUniqueInputObjectSchema } from './ActionTypeWhereUniqueInput.schema';
import { ActionTypeCreateWithoutActionlogInputObjectSchema } from './ActionTypeCreateWithoutActionlogInput.schema';
import { ActionTypeUncheckedCreateWithoutActionlogInputObjectSchema } from './ActionTypeUncheckedCreateWithoutActionlogInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeCreateOrConnectWithoutActionlogInput> =
  z
    .object({
      where: z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ActionTypeCreateWithoutActionlogInputObjectSchema),
        z.lazy(
          () => ActionTypeUncheckedCreateWithoutActionlogInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ActionTypeCreateOrConnectWithoutActionlogInputObjectSchema =
  Schema;
