import { z } from 'zod';
import { UserCreateNestedOneWithoutAdminuserInputObjectSchema } from './UserCreateNestedOneWithoutAdminuserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AdminUserCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAdminuserInputObjectSchema),
  })
  .strict();

export const AdminUserCreateInputObjectSchema = Schema;
