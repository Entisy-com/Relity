import { z } from 'zod';
import { RoleCreateNestedManyWithoutServerInputObjectSchema } from './RoleCreateNestedManyWithoutServerInput.schema';
import { TextChannelCreateNestedManyWithoutServerInputObjectSchema } from './TextChannelCreateNestedManyWithoutServerInput.schema';
import { VoiceChannelCreateNestedManyWithoutServerInputObjectSchema } from './VoiceChannelCreateNestedManyWithoutServerInput.schema';
import { MemberCreateNestedOneWithoutOwnerOfInputObjectSchema } from './MemberCreateNestedOneWithoutOwnerOfInput.schema';
import { MemberCreateNestedManyWithoutServerInputObjectSchema } from './MemberCreateNestedManyWithoutServerInput.schema';
import { UserCreateNestedManyWithoutBannedonInputObjectSchema } from './UserCreateNestedManyWithoutBannedonInput.schema';
import { ActionLogCreateNestedOneWithoutServerInputObjectSchema } from './ActionLogCreateNestedOneWithoutServerInput.schema';
import { ServerUserPositionCreateNestedManyWithoutServerInputObjectSchema } from './ServerUserPositionCreateNestedManyWithoutServerInput.schema';
import { ServerSettingsCreateNestedOneWithoutServerInputObjectSchema } from './ServerSettingsCreateNestedOneWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerCreateWithoutCategoriesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    pfp: z.string().optional(),
    banner: z.string().optional(),
    roles: z
      .lazy(() => RoleCreateNestedManyWithoutServerInputObjectSchema)
      .optional(),
    textchannel: z
      .lazy(() => TextChannelCreateNestedManyWithoutServerInputObjectSchema)
      .optional(),
    voicechannel: z
      .lazy(() => VoiceChannelCreateNestedManyWithoutServerInputObjectSchema)
      .optional(),
    owner: z.lazy(() => MemberCreateNestedOneWithoutOwnerOfInputObjectSchema),
    members: z
      .lazy(() => MemberCreateNestedManyWithoutServerInputObjectSchema)
      .optional(),
    bannedUser: z
      .lazy(() => UserCreateNestedManyWithoutBannedonInputObjectSchema)
      .optional(),
    actionLog: z
      .lazy(() => ActionLogCreateNestedOneWithoutServerInputObjectSchema)
      .optional(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    serverUserPosition: z
      .lazy(
        () => ServerUserPositionCreateNestedManyWithoutServerInputObjectSchema,
      )
      .optional(),
    settings: z
      .lazy(() => ServerSettingsCreateNestedOneWithoutServerInputObjectSchema)
      .optional(),
  })
  .strict();

export const ServerCreateWithoutCategoriesInputObjectSchema = Schema;
