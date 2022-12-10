import { z } from 'zod';
import { ServerCreateNestedOneWithoutServerUserPositionInputObjectSchema } from './ServerCreateNestedOneWithoutServerUserPositionInput.schema';
import { UserCreateNestedOneWithoutServerUserPositionInputObjectSchema } from './UserCreateNestedOneWithoutServerUserPositionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUserPositionCreateInput> = z
  .object({
    id: z.string().optional(),
    server: z.lazy(
      () => ServerCreateNestedOneWithoutServerUserPositionInputObjectSchema,
    ),
    user: z.lazy(
      () => UserCreateNestedOneWithoutServerUserPositionInputObjectSchema,
    ),
    position: z.number().optional(),
  })
  .strict();

export const ServerUserPositionCreateInputObjectSchema = Schema;
