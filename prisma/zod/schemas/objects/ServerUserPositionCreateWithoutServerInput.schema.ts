import { z } from 'zod';
import { UserCreateNestedOneWithoutServerUserPositionInputObjectSchema } from './UserCreateNestedOneWithoutServerUserPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionCreateWithoutServerInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutServerUserPositionInputObjectSchema,
    ),
    position: z.number().optional(),
  })
  .strict();

export const ServerUserPositionCreateWithoutServerInputObjectSchema = Schema;
