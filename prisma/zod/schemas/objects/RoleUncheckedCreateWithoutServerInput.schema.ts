import { z } from 'zod';
import { RoleCreatepermissionsInputObjectSchema } from './RoleCreatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { MessageUncheckedCreateNestedManyWithoutMentionedRolesInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutMentionedRolesInput.schema';
import { MemberUncheckedCreateNestedManyWithoutRolesInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateWithoutServerInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    permissions: z
      .union([
        z.lazy(() => RoleCreatepermissionsInputObjectSchema),
        z.lazy(() => PermissionSchema).array(),
      ])
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    visible: z.boolean(),
    color: z.string().optional(),
    position: z.number().optional(),
    mentionedIn: z
      .lazy(
        () =>
          MessageUncheckedCreateNestedManyWithoutMentionedRolesInputObjectSchema,
      )
      .optional(),
    members: z
      .lazy(() => MemberUncheckedCreateNestedManyWithoutRolesInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleUncheckedCreateWithoutServerInputObjectSchema = Schema;
