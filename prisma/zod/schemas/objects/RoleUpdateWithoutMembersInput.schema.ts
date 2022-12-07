import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleUpdatepermissionsInputObjectSchema } from './RoleUpdatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ServerUpdateOneRequiredWithoutRolesNestedInputObjectSchema } from './ServerUpdateOneRequiredWithoutRolesNestedInput.schema';
import { MessageUpdateManyWithoutMentionedRolesNestedInputObjectSchema } from './MessageUpdateManyWithoutMentionedRolesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateWithoutMembersInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    permissions: z
      .union([
        z.lazy(() => RoleUpdatepermissionsInputObjectSchema),
        z.lazy(() => PermissionSchema).array(),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    visible: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    color: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    position: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    server: z
      .lazy(() => ServerUpdateOneRequiredWithoutRolesNestedInputObjectSchema)
      .optional(),
    mentionedIn: z
      .lazy(() => MessageUpdateManyWithoutMentionedRolesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleUpdateWithoutMembersInputObjectSchema = Schema;
