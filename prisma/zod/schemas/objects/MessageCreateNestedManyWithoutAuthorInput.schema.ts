import { z } from 'zod';
import { MessageCreateWithoutAuthorInputObjectSchema } from './MessageCreateWithoutAuthorInput.schema';
import { MessageUncheckedCreateWithoutAuthorInputObjectSchema } from './MessageUncheckedCreateWithoutAuthorInput.schema';
import { MessageCreateOrConnectWithoutAuthorInputObjectSchema } from './MessageCreateOrConnectWithoutAuthorInput.schema';
import { MessageCreateManyAuthorInputEnvelopeObjectSchema } from './MessageCreateManyAuthorInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateNestedManyWithoutAuthorInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MessageCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => MessageCreateWithoutAuthorInputObjectSchema).array(),
        z.lazy(() => MessageUncheckedCreateWithoutAuthorInputObjectSchema),
        z
          .lazy(() => MessageUncheckedCreateWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MessageCreateOrConnectWithoutAuthorInputObjectSchema),
        z
          .lazy(() => MessageCreateOrConnectWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MessageCreateManyAuthorInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MessageCreateNestedManyWithoutAuthorInputObjectSchema = Schema;
