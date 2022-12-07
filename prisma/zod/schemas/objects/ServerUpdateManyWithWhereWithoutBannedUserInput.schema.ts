import { z } from 'zod';
import { ServerScalarWhereInputObjectSchema } from './ServerScalarWhereInput.schema';
import { ServerUpdateManyMutationInputObjectSchema } from './ServerUpdateManyMutationInput.schema';
import { ServerUncheckedUpdateManyWithoutBannedonInputObjectSchema } from './ServerUncheckedUpdateManyWithoutBannedonInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUpdateManyWithWhereWithoutBannedUserInput> =
  z
    .object({
      where: z.lazy(() => ServerScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ServerUpdateManyMutationInputObjectSchema),
        z.lazy(() => ServerUncheckedUpdateManyWithoutBannedonInputObjectSchema),
      ]),
    })
    .strict();

export const ServerUpdateManyWithWhereWithoutBannedUserInputObjectSchema =
  Schema;
