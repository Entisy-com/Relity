import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.scss";
import { useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }, []);

  const updateRolePosition = trpc.roles.updateRole.useMutation();
  const switchRole = trpc.roles.switchRole.useMutation();

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    console.log({ source, destination, draggableId });
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    const oldPosition = source.index;
    const position = destination.index;
    if (draggableId.startsWith("role#")) {
      switchRole.mutate({
        position,
        oldPosition,
        serverId: draggableId.split("#")[2]!,
      });
    }
  };

  return (
    <SessionProvider session={session} basePath="/api/v1/auth">
      <DragDropContext onDragEnd={onDragEnd}>
        <Component {...pageProps} />
      </DragDropContext>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
