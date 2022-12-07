import { z } from 'zod';
import { MemberCreateWithoutMessagesInputObjectSchema } from './MemberCreateWithoutMessagesInput.schema';
import { MemberUncheckedCreateWithoutMessagesInputObjectSchema } from './MemberUncheckedCreateWithoutMessagesInput.schema';
import { MemberCreateOrConnectWithoutMessagesInputObjectSchema } from './MemberCreateOrConnectWithoutMessagesInput.schema';
import { MemberUpsertWithoutMessagesInputObjectSchema } from './MemberUpsertWithoutMessagesInput.schema';
import { MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutMessagesInputObjectSchema } from './MemberUpdateWithoutMessagesInput.schema';
import { MemberUncheckedUpdateWithoutMessagesInputObjectSchema } from './MemberUncheckedUpdateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MemberUpdateOneRequiredWithoutMessagesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MemberCreateWithoutMessagesInputObjectSchema),
          z.lazy(() => MemberUncheckedCreateWithoutMessagesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MemberCreateOrConnectWithoutMessagesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => MemberUpsertWithoutMessagesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MemberWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MemberUpdateWithoutMessagesInputObjectSchema),
          z.lazy(() => MemberUncheckedUpdateWithoutMessagesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const MemberUpdateOneRequiredWithoutMessagesNestedInputObjectSchema =
  Schema;
