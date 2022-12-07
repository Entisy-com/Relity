import { z } from 'zod';
import { ActionTypeCreateWithoutActionlogInputObjectSchema } from './ActionTypeCreateWithoutActionlogInput.schema';
import { ActionTypeUncheckedCreateWithoutActionlogInputObjectSchema } from './ActionTypeUncheckedCreateWithoutActionlogInput.schema';
import { ActionTypeCreateOrConnectWithoutActionlogInputObjectSchema } from './ActionTypeCreateOrConnectWithoutActionlogInput.schema';
import { ActionTypeCreateManyActionlogInputEnvelopeObjectSchema } from './ActionTypeCreateManyActionlogInputEnvelope.schema';
import { ActionTypeWhereUniqueInputObjectSchema } from './ActionTypeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeCreateNestedManyWithoutActionlogInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ActionTypeCreateWithoutActionlogInputObjectSchema),
          z
            .lazy(() => ActionTypeCreateWithoutActionlogInputObjectSchema)
            .array(),
          z.lazy(
            () => ActionTypeUncheckedCreateWithoutActionlogInputObjectSchema,
          ),
          z
            .lazy(
              () => ActionTypeUncheckedCreateWithoutActionlogInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ActionTypeCreateOrConnectWithoutActionlogInputObjectSchema,
          ),
          z
            .lazy(
              () => ActionTypeCreateOrConnectWithoutActionlogInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ActionTypeCreateManyActionlogInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ActionTypeCreateNestedManyWithoutActionlogInputObjectSchema =
  Schema;
