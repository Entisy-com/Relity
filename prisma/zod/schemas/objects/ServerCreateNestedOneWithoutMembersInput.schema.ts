import { z } from 'zod';
import { ServerCreateWithoutMembersInputObjectSchema } from './ServerCreateWithoutMembersInput.schema';
import { ServerUncheckedCreateWithoutMembersInputObjectSchema } from './ServerUncheckedCreateWithoutMembersInput.schema';
import { ServerCreateOrConnectWithoutMembersInputObjectSchema } from './ServerCreateOrConnectWithoutMembersInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateNestedOneWithoutMembersInput> = z
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
    connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ServerCreateNestedOneWithoutMembersInputObjectSchema = Schema;
