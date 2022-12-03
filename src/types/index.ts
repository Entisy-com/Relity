import { Permission, Prisma } from "@prisma/client";

export type Server = Prisma.ServerGetPayload<{
  include: {
    bannedUser: true;
    categories: true;
    owner: true;
    roles: true;
    textchannel: true;
    users: true;
    voicechannel: true;
    ActionLog: true;
  };
}>;

export type User = Prisma.UserGetPayload<{
  include: {
    accounts: true;
    adminuser: true;
    bannedon: true;
    friends: true;
    friendsWith: true;
    mentionedin: true;
    messages: true;
    ownerof: true;
    roles: true;
    server: true;
    sessions: true;
    settings: true;
    voicechannel: true;
  };
}>;

export type Role = Prisma.RoleGetPayload<{
  include: {
    mentionedIn: true;
    server: true;
    users: true;
  };
}>;

export type TextChannel = Prisma.TextChannelGetPayload<{
  include: {
    category: true;
    messages: true;
    server: true;
  };
}>;

export type VoiceChannel = Prisma.VoiceChannelGetPayload<{
  include: {
    category: true;
    server: true;
    users: true;
  };
}>;

export type Message = Prisma.MessageGetPayload<{
  include: {
    author: true;
    mentionedRoles: true;
    mentionedUser: true;
    textChannel: true;
  };
}>;

export type Account = Prisma.AccountGetPayload<{
  include: {
    user: true;
  };
}>;

export type AdminUser = Prisma.AdminUserGetPayload<{
  include: {
    user: true;
  };
}>;

export type Category = Prisma.CategoryGetPayload<{
  include: {
    server: true;
    textchannels: true;
    voicechannels: true;
  };
}>;

export type Session = Prisma.SessionGetPayload<{
  include: {
    user: true;
  };
}>;

export type UserSettings = Prisma.UserSettingsGetPayload<{
  include: {
    User: true;
  };
}>;

export const PermissionOptions = [
  { label: "Send Message", value: Permission.SEND_MESSAGES },
  { label: "Read Message", value: Permission.READ_MESSAGES },
  { label: "Ban Member", value: Permission.BAN_MEMBERS },
  { label: "Kick Member", value: Permission.KICK_MEMBERS },
  { label: "Manage Members", value: Permission.MANAGE_MEMBERS },
  { label: "Manage Messages", value: Permission.MANAGE_MESSAGES },
  { label: "Manage Server", value: Permission.MANAGE_SERVER },
];

export type ActionLog = Prisma.ActionLogGetPayload<{
  include: {
    actions: true;
    server: true;
  };
}>;

export type ActionType = Prisma.ActionTypeGetPayload<{
  include: {
    actionlog: true;
    user: true;
  };
}>;
