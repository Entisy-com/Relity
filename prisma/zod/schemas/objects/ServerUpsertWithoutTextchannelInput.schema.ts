import { z } from 'zod';
import { ServerUpdateWithoutTextchannelInputObjectSchema } from './ServerUpdateWithoutTextchannelInput.schema';
import { ServerUncheckedUpdateWithoutTextchannelInputObjectSchema } from './ServerUncheckedUpdateWithoutTextchannelInput.schema';
import { ServerCreateWithoutTextchannelInputObjectSchema } from './ServerCreateWithoutTextchannelInput.schema';
import { ServerUncheckedCreateWithoutTextchannelInputObjectSchema } from './ServerUncheckedCreateWithoutTextchannelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpsertWithoutTextchannelInput> = z
  .object({
    update: z.union([
      z.lazy(() => ServerUpdateWithoutTextchannelInputObjectSchema),
      z.lazy(() => ServerUncheckedUpdateWithoutTextchannelInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ServerCreateWithoutTextchannelInputObjectSchema),
      z.lazy(() => ServerUncheckedCreateWithoutTextchannelInputObjectSchema),
    ]),
  })
  .strict();

export const ServerUpsertWithoutTextchannelInputObjectSchema = Schema;
