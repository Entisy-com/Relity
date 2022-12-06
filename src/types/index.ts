import type { Prisma } from "@prisma/client";
import { Permission } from "@prisma/client";

export type Server = Prisma.ServerGetPayload<{
  include: {
    bannedUser: true;
    categories: true;
    owner: {
      include: {
        user: true;
        server: true;
        ownerOf: true;
        actionType: true;
        mentionedIn: true;
        messages: true;
        roles: true;
        voiceChannel: true;
      };
    };
    roles: true;
    textchannel: true;
    voicechannel: true;
    actionLog: {
      include: {
        actions: true;
        server: true;
      };
    };
    members: {
      include: {
        actionType: true;
        mentionedIn: true;
        messages: true;
        server: true;
        ownerOf: true;
        roles: true;
        user: true;
        voiceChannel: true;
      };
    };
  };
}>;

export type User = Prisma.UserGetPayload<{
  include: {
    member: true;
    adminuser: true;
    bannedon: true;
    friends: true;
    friendsWith: true;
    settings: true;
  };
}>;

export type Role = Prisma.RoleGetPayload<{
  include: {
    members: true;
    mentionedIn: true;
    server: true;
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
    members: true;
    server: true;
  };
}>;

export type Message = Prisma.MessageGetPayload<{
  include: {
    author: {
      include: {
        voiceChannel: true;
        user: true;
        actionType: true;
        mentionedIn: true;
        messages: true;
        ownerOf: true;
        roles: true;
        server: true;
      };
    };
    mentionedRoles: true;
    mentionedMembers: true;
    textChannel: true;
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
    user: true;
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
    actions: {
      include: {
        actionlog: {
          include: {
            actions: true;
            server: true;
          };
        };
        user: {
          include: {
            actionType: true;
            mentionedIn: true;
            messages: true;
            server: true;
            ownerOf: true;
            roles: true;
            user: true;
            voiceChannel: true;
          };
        };
      };
    };
    server: true;
  };
}>;

export type ActionType = Prisma.ActionTypeGetPayload<{
  include: {
    actionlog: {
      include: {
        actions: true;
        server: true;
      };
    };
    user: {
      include: {
        actionType: true;
        mentionedIn: true;
        messages: true;
        server: true;
        ownerOf: true;
        roles: true;
        user: true;
        voiceChannel: true;
      };
    };
  };
}>;

export type Member = Prisma.MemberGetPayload<{
  include: {
    actionType: true;
    voiceChannel: true;
    mentionedIn: true;
    messages: true;
    ownerOf: true;
    roles: true;
    server: true;
    user: true;
  };
}>;
