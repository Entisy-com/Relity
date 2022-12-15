import { Prisma } from "@prisma/client";
import { Permission } from "@prisma/client";

export type Server = Prisma.ServerGetPayload<{
  include: {
    invites: true;
    settings: true;
    textchannel: true;
    bannedUser: true;
    categories: true;
    owner: true;
    roles: {
      include: {
        members: true;
      };
    };
    voicechannel: {
      include: {
        category: true;
        members: {
          include: {
            user: true;
          };
        };
        server: true;
      };
    };
    actionLog: {
      include: {
        actions: true;
        server: true;
      };
    };
    members: {
      include: {
        user: true;
        actionType: true;
        mentionedIn: true;
        messages: true;
        ownerOf: true;
        roles: true;
        server: true;
        voiceChannel: true;
      };
    };
    serverUserPosition: true;
  };
}>;

export type User = Prisma.UserGetPayload<{
  include: {
    member: {
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
    };
    adminuser: true;
    bannedon: true;
    friends: {
      include: {
        member: true;
        adminuser: true;
        friends: true;
        bannedon: true;
        friendsWith: true;
        settings: true;
        serverUserPosition: true;
      };
    };
    friendsWith: true;
    settings: true;
    serverUserPosition: true;
  };
}>;

export type Role = Prisma.RoleGetPayload<{
  include: {
    members: {
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
    };
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
    author: true;
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
        member: {
          include: {
            user: true;
          };
        };
      };
    };
    server: true;
  };
}>;

export type ActionType = Prisma.ActionTypeGetPayload<{
  include: {
    actionlog: true;
    user: true;
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

export type ServerSettings = Prisma.ServerSettingsGetPayload<{
  include: {
    server: true;
  };
}>;

export type ServerUserPosition = Prisma.ServerUserPositionGetPayload<{
  include: {
    server: true;
    user: true;
  };
}>;

export type FriendRequest = Prisma.FriendRequestGetPayload<{
  include: {
    target: true;
    sender: true;
  };
}>;

export type Notification = Prisma.NotificationGetPayload<{
  include: {
    user: true;
  };
}>;

export type Invite = Prisma.InviteGetPayload<{
  include: {
    server: true;
  };
}>;

///////////////////////////////////////////////
// DEFAULT INCLUDES
///////////////////////////////////////////////

export const defaultMemberInclude = Prisma.validator<Prisma.MemberInclude>()({
  actionType: true,
  voiceChannel: true,
  mentionedIn: true,
  messages: true,
  ownerOf: true,
  roles: {
    include: {
      members: true,
      mentionedIn: true,
      server: true,
    },
  },
  server: true,
  user: true,
});

export const defaultRoleInclude = Prisma.validator<Prisma.RoleInclude>()({
  members: {
    include: defaultMemberInclude,
  },
  mentionedIn: true,
  server: true,
});

export const defaultUserInclude = Prisma.validator<Prisma.UserInclude>()({
  member: {
    include: defaultMemberInclude,
  },
  adminuser: true,
  bannedon: true,
  friends: {
    include: {
      member: true,
      adminuser: true,
      friends: true,
      bannedon: true,
      friendsWith: true,
      settings: true,
      serverUserPosition: true,
    },
  },
  friendsWith: true,
  settings: true,
  serverUserPosition: true,
});
