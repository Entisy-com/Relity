import { Permission, User } from "@prisma/client";
import axios from "axios";
import { Member, Server, TextChannel, VoiceChannel } from "../types";
import { LOGGER_URL } from "./constants";

// const createTextChannel = trpc.textChannel.createChannel.useMutation();
// const createVoiceChannel = trpc.voiceChannel.createChannel.useMutation();
// const updateServer = trpc.server.updateServer.useMutation();

export function handleKickMember(
  serverId: string,
  member: Member,
  mutation: any
) {
  mutation.mutate({ memberId: member?.id!, serverId: serverId });
  axios.post(`${LOGGER_URL}`, {
    message: `Kicked Member "${
      member?.nickname ?? member?.user?.name
    }", ID: ${member?.id!}, `,
  });
}

export function handleBanUser(serverId: string, member: Member, mutation: any) {
  mutation.mutate({
    serverId: serverId,
    userId: member?.userId!,
    memberId: member.id,
  });
  axios.post(`${LOGGER_URL}`, {
    message: `Banned Member "${
      member?.nickname ?? member?.user?.name
    }", ID: ${member?.id!} `,
  });
}

export function handleDeleteVoiceChannel(
  ref: any,
  repeatRef: any,
  voiceChannel: VoiceChannel,
  mutation: any
) {
  if (!ref.current || !repeatRef.current) return;
  if (
    !(ref.current.value.trim().length > 0) ||
    !(repeatRef.current.value.trim().length > 0)
  )
    return;
  if (ref.current.value.trim() !== repeatRef.current.value.trim()) return;
  if (ref.current.value.trim() !== voiceChannel?.name.trim()) return;
  mutation.mutate({ id: voiceChannel?.id! });
}

export function handleDeleteTextChannel(
  ref: any,
  repeatRef: any,
  textChannel: TextChannel,
  serverId: string,
  mutation: any
) {
  if (!ref.current || !repeatRef.current) return;
  if (
    !(ref.current.value.trim().length > 0) ||
    !(repeatRef.current.value.trim().length > 0)
  )
    return;
  if (ref.current.value.trim() !== repeatRef.current.value.trim()) return;
  if (ref.current.value.trim() !== textChannel?.name.trim()) return;
  mutation.mutate({ id: textChannel?.id! });
  window.location.href = `/${serverId}`;
}

export function handleDeleteServer(
  ref: any,
  repeatRef: any,
  server: Server,
  mutation: any
) {
  if (!ref.current || !repeatRef.current) return;
  if (
    !(ref.current.value.trim().length > 0) ||
    !(repeatRef.current.value.trim().length > 0)
  )
    return;
  if (ref.current.value.trim() !== repeatRef.current.value.trim()) return;
  if (ref.current.value.trim() !== server?.name.trim()) return;
  mutation.mutate({ id: server?.id! });
  axios.post(`${LOGGER_URL}`, {
    message: `Deleted Server "${server?.name}", ID: ${server?.id!}`,
  });
}

export function isOwner(userId: string, server: Server) {
  for (const member of server.members) {
    if (member.userId === userId) {
      if (server.ownerid === member.id) return true;
    }
  }
  return false;
}

export function hasPermission(
  userId: string,
  server: Server,
  permission: Permission
) {
  for (const role of server.roles) {
    if (role.permissions.includes(permission)) {
      for (const member of role.members) {
        if (member.userId === userId) return true;
      }
    }
  }
  if (isOwner(userId, server)) return true;
  return false;
}

// TODO: send unban information under condition
export function handleUnbanUser(user: User, serverId: string, mutation: any) {
  mutation.mutate({ serverId: serverId, userId: user?.id! });
  axios.post(`${LOGGER_URL}`, {
    message: `Unbanned User "${user?.name}", ID: ${user?.id}, `,
  });
}
