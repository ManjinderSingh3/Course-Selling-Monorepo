import { getServerSession, type NextAuthOptions } from "next-auth";
import prisma from "@/prisma/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import "dotenv/config";

import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import FacebookProvider from "next-auth/providers/facebook";

export type OAuthProviders = (typeof providers)[number];
export const providers = ["google", "facebook", "discord"] as const;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  cookies: {
    sessionToken: {
      name: ``,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      },
    },
  },
  callbacks: {
    async session({ session, token, user }) {
      console.log("$$$$ session : ----", session);
      console.log("$$$$ token : ----", token);
      console.log("$$$$ user : ----", user);
      return session;
    },
  },
};

export async function getUserDetails() {
  try {
    const session = await getServerSession(authOptions);
    return session?.user;
  } catch (err) {
    throw new Error((err as Error).message ?? "Please try again");
  }
}
