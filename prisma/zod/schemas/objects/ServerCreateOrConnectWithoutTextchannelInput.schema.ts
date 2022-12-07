import { z } from 'zod';
import { ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutTextchannelInputObjectSchema } from './ServerCreateWithoutTextchannelInput.schema';
import { ServerUncheckedCreateWithoutTextchannelInputObjectSchema } from './ServerUncheckedCreateWithoutTextchannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateOrConnectWithoutTextchannelInput> = z
  .object({
    where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ServerCreateWithoutTextchannelInputObjectSchema),
      z.lazy(() => ServerUncheckedCreateWithoutTextchannelInputObjectSchema),
    ]),
  })
  .strict();

export const ServerCreateOrConnectWithoutTextchannelInputObjectSchema = Schema;
