import { z } from 'zod';
import { ServerCreateWithoutMembersInputObjectSchema } from './ServerCreateWithoutMembersInput.schema';
import { ServerUncheckedCreateWithoutMembersInputObjectSchema } from './ServerUncheckedCreateWithoutMembersInput.schema';
import { ServerCreateOrConnectWithoutMembersInputObjectSchema } from './ServerCreateOrConnectWithoutMembersInput.schema';
import { ServerUpsertWithoutMembersInputObjectSchema } from './ServerUpsertWithoutMembersInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutMembersInputObjectSchema } from './ServerUpdateWithoutMembersInput.schema';
import { ServerUncheckedUpdateWithoutMembersInputObjectSchema } from './ServerUncheckedUpdateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpdateOneWithoutMembersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ServerCreateWithoutMembersInputObjectSchema),
        z.lazy(() => ServerUncheckedCreateWithoutMembersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ServerCreateOrConnectWithoutMembersInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ServerUpsertWithoutMembersInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ServerUpdateWithoutMembersInputObjectSchema),
        z.lazy(() => ServerUncheckedUpdateWithoutMembersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ServerUpdateOneWithoutMembersNestedInputObjectSchema = Schema;
