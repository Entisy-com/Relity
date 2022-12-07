import { z } from 'zod';
import { RoleCreatepermissionsInputObjectSchema } from './RoleCreatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { MessageCreateNestedManyWithoutMentionedRolesInputObjectSchema } from './MessageCreateNestedManyWithoutMentionedRolesInput.schema';
import { MemberCreateNestedManyWithoutRolesInputObjectSchema } from './MemberCreateNestedManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateWithoutServerInput> = z
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
      .lazy(() => MessageCreateNestedManyWithoutMentionedRolesInputObjectSchema)
      .optional(),
    members: z
      .lazy(() => MemberCreateNestedManyWithoutRolesInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleCreateWithoutServerInputObjectSchema = Schema;
