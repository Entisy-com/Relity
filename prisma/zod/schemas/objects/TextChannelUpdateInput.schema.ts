import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TextChannelUpdatepermissionsInputObjectSchema } from './TextChannelUpdatepermissionsInput.schema';
import { PermissionSchema } from '../enums/Permission.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { MessageUpdateManyWithoutTextChannelNestedInputObjectSchema } from './MessageUpdateManyWithoutTextChannelNestedInput.schema';
import { CategoryUpdateOneWithoutTextchannelsNestedInputObjectSchema } from './CategoryUpdateOneWithoutTextchannelsNestedInput.schema';
import { ServerUpdateOneRequiredWithoutTextchannelNestedInputObjectSchema } from './ServerUpdateOneRequiredWithoutTextchannelNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TextChannelUpdateInput> = z
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
    permissions: z
      .union([
        z.lazy(() => TextChannelUpdatepermissionsInputObjectSchema),
        z.lazy(() => PermissionSchema).array(),
      ])
      .optional(),
    position: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    messages: z
      .lazy(() => MessageUpdateManyWithoutTextChannelNestedInputObjectSchema)
      .optional(),
    category: z
      .lazy(() => CategoryUpdateOneWithoutTextchannelsNestedInputObjectSchema)
      .optional(),
    server: z
      .lazy(
        () => ServerUpdateOneRequiredWithoutTextchannelNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TextChannelUpdateInputObjectSchema = Schema;
