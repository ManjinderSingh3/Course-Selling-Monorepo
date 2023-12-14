"use client";
import { SessionProvider } from "next-auth/react";

// Wrappper to fetch user session. Client components fetch user details using this wrapper
export function UserSessionWrapper({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}): React.ReactNode {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
