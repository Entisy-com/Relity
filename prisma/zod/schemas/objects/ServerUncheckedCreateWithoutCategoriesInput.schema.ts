import { z } from 'zod';
import { RoleUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './RoleUncheckedCreateNestedManyWithoutServerInput.schema';
import { TextChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './TextChannelUncheckedCreateNestedManyWithoutServerInput.schema';
import { VoiceChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './VoiceChannelUncheckedCreateNestedManyWithoutServerInput.schema';
import { MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutServerInput.schema';
import { UserUncheckedCreateNestedManyWithoutBannedonInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutBannedonInput.schema';
import { ActionLogUncheckedCreateNestedOneWithoutServerInputObjectSchema } from './ActionLogUncheckedCreateNestedOneWithoutServerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ServerUncheckedCreateWithoutCategoriesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    ownerid: z.string(),
    pfp: z.string().optional(),
    banner: z.string().optional(),
    roles: z
      .lazy(() => RoleUncheckedCreateNestedManyWithoutServerInputObjectSchema)
      .optional(),
    textchannel: z
      .lazy(
        () =>
          TextChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema,
      )
      .optional(),
    voicechannel: z
      .lazy(
        () =>
          VoiceChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema,
      )
      .optional(),
    members: z
      .lazy(() => MemberUncheckedCreateNestedManyWithoutServerInputObjectSchema)
      .optional(),
    bannedUser: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutBannedonInputObjectSchema)
      .optional(),
    actionLog: z
      .lazy(
        () => ActionLogUncheckedCreateNestedOneWithoutServerInputObjectSchema,
      )
      .optional(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const ServerUncheckedCreateWithoutCategoriesInputObjectSchema = Schema;
