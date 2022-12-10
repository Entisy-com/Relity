import { z } from 'zod';
import { UserCreateNestedOneWithoutSettingsInputObjectSchema } from './UserCreateNestedOneWithoutSettingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSettingsCreateInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutSettingsInputObjectSchema),
    notifyUnban: z.boolean().optional(),
    notifyBan: z.boolean().optional(),
    notifyKick: z.boolean().optional(),
  })
  .strict();

export const UserSettingsCreateInputObjectSchema = Schema;
