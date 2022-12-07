import { z } from 'zod';
import { MemberCreateWithoutMentionedInInputObjectSchema } from './MemberCreateWithoutMentionedInInput.schema';
import { MemberUncheckedCreateWithoutMentionedInInputObjectSchema } from './MemberUncheckedCreateWithoutMentionedInInput.schema';
import { MemberCreateOrConnectWithoutMentionedInInputObjectSchema } from './MemberCreateOrConnectWithoutMentionedInInput.schema';
import { MemberUpsertWithWhereUniqueWithoutMentionedInInputObjectSchema } from './MemberUpsertWithWhereUniqueWithoutMentionedInInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithWhereUniqueWithoutMentionedInInputObjectSchema } from './MemberUpdateWithWhereUniqueWithoutMentionedInInput.schema';
import { MemberUpdateManyWithWhereWithoutMentionedInInputObjectSchema } from './MemberUpdateManyWithWhereWithoutMentionedInInput.schema';
import { MemberScalarWhereInputObjectSchema } from './MemberScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUncheckedUpdateManyWithoutMentionedInNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MemberCreateWithoutMentionedInInputObjectSchema),
          z.lazy(() => MemberCreateWithoutMentionedInInputObjectSchema).array(),
          z.lazy(
            () => MemberUncheckedCreateWithoutMentionedInInputObjectSchema,
          ),
          z
            .lazy(
              () => MemberUncheckedCreateWithoutMentionedInInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MemberCreateOrConnectWithoutMentionedInInputObjectSchema,
          ),
          z
            .lazy(
              () => MemberCreateOrConnectWithoutMentionedInInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              MemberUpsertWithWhereUniqueWithoutMentionedInInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MemberUpsertWithWhereUniqueWithoutMentionedInInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => MemberWhereUniqueInputObjectSchema),
          z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MemberWhereUniqueInputObjectSchema),
          z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MemberWhereUniqueInputObjectSchema),
          z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MemberWhereUniqueInputObjectSchema),
          z.lazy(() => MemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MemberUpdateWithWhereUniqueWithoutMentionedInInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MemberUpdateWithWhereUniqueWithoutMentionedInInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MemberUpdateManyWithWhereWithoutMentionedInInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MemberUpdateManyWithWhereWithoutMentionedInInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MemberScalarWhereInputObjectSchema),
          z.lazy(() => MemberScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MemberUncheckedUpdateManyWithoutMentionedInNestedInputObjectSchema =
  Schema;
