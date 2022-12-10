import { z } from 'zod';
import { ServerCreateNestedOneWithoutServerUserPositionInputObjectSchema } from './ServerCreateNestedOneWithoutServerUserPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    server: z.lazy(
      () => ServerCreateNestedOneWithoutServerUserPositionInputObjectSchema,
    ),
    position: z.number().optional(),
  })
  .strict();

export const ServerUserPositionCreateWithoutUserInputObjectSchema = Schema;
