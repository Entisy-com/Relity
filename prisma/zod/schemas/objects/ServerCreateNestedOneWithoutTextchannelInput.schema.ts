import { z } from 'zod';
import { ServerCreateWithoutTextchannelInputObjectSchema } from './ServerCreateWithoutTextchannelInput.schema';
import { ServerUncheckedCreateWithoutTextchannelInputObjectSchema } from './ServerUncheckedCreateWithoutTextchannelInput.schema';
import { ServerCreateOrConnectWithoutTextchannelInputObjectSchema } from './ServerCreateOrConnectWithoutTextchannelInput.schema';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateNestedOneWithoutTextchannelInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ServerCreateWithoutTextchannelInputObjectSchema),
        z.lazy(() => ServerUncheckedCreateWithoutTextchannelInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ServerCreateOrConnectWithoutTextchannelInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ServerCreateNestedOneWithoutTextchannelInputObjectSchema = Schema;
