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
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        // is admin is configured in the prisma db it is not available inside the token yet,
        // and the token specifically comes from the jwt so we have to somehow link the jwt to the database.
        // for that next auth suggest an explicit jwt callback (docs)
        // if the token consist of the admin add it to the user field of the current session(note the is admin field of the token is still empty)

        session.user.
        // session.user.email = token.email;
      }
      return session;
    },
  },
  //   cookies: {
  //     sessionToken: {
  //       name: `${cookiePrefix}next-auth.session-token`,
  //       options: {
  //         httpOnly: true,
  //         sameSite: "lax",
  //         path: "/",
  //         domain: "localhost",
  //         secure: useSecureCookies,
  //       },
  //     },
  //   },
};

export async function getUserDetails() {
  try {
    const session = await getServerSession(authOptions);
    return session?.user;
  } catch (err) {
    throw new Error((err as Error).message ?? "Please try again");
  }
}
