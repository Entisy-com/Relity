import { z } from 'zod';
import { ActionTypeCreateWithoutMemberInputObjectSchema } from './ActionTypeCreateWithoutMemberInput.schema';
import { ActionTypeUncheckedCreateWithoutMemberInputObjectSchema } from './ActionTypeUncheckedCreateWithoutMemberInput.schema';
import { ActionTypeCreateOrConnectWithoutMemberInputObjectSchema } from './ActionTypeCreateOrConnectWithoutMemberInput.schema';
import { ActionTypeUpsertWithWhereUniqueWithoutMemberInputObjectSchema } from './ActionTypeUpsertWithWhereUniqueWithoutMemberInput.schema';
import { ActionTypeCreateManyMemberInputEnvelopeObjectSchema } from './ActionTypeCreateManyMemberInputEnvelope.schema';
import { ActionTypeWhereUniqueInputObjectSchema } from './ActionTypeWhereUniqueInput.schema';
import { ActionTypeUpdateWithWhereUniqueWithoutMemberInputObjectSchema } from './ActionTypeUpdateWithWhereUniqueWithoutMemberInput.schema';
import { ActionTypeUpdateManyWithWhereWithoutMemberInputObjectSchema } from './ActionTypeUpdateManyWithWhereWithoutMemberInput.schema';
import { ActionTypeScalarWhereInputObjectSchema } from './ActionTypeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActionTypeUncheckedUpdateManyWithoutMemberNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ActionTypeCreateWithoutMemberInputObjectSchema),
          z.lazy(() => ActionTypeCreateWithoutMemberInputObjectSchema).array(),
          z.lazy(() => ActionTypeUncheckedCreateWithoutMemberInputObjectSchema),
          z
            .lazy(() => ActionTypeUncheckedCreateWithoutMemberInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ActionTypeCreateOrConnectWithoutMemberInputObjectSchema),
          z
            .lazy(() => ActionTypeCreateOrConnectWithoutMemberInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ActionTypeUpsertWithWhereUniqueWithoutMemberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ActionTypeUpsertWithWhereUniqueWithoutMemberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ActionTypeCreateManyMemberInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema),
          z.lazy(() => ActionTypeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ActionTypeUpdateWithWhereUniqueWithoutMemberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ActionTypeUpdateWithWhereUniqueWithoutMemberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ActionTypeUpdateManyWithWhereWithoutMemberInputObjectSchema,
          ),
          z
            .lazy(
              () => ActionTypeUpdateManyWithWhereWithoutMemberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ActionTypeScalarWhereInputObjectSchema),
          z.lazy(() => ActionTypeScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ActionTypeUncheckedUpdateManyWithoutMemberNestedInputObjectSchema =
  Schema;
