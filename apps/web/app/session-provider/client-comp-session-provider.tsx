"use client";

import { SessionProvider } from "next-auth/react";

export function ClientComponentsSessionProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}): React.ReactNode {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
